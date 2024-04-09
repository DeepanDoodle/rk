"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Env
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = require("process");
dotenv_1.default.config({ path: (0, path_1.join)(__dirname, "..", `${process_1.argv[2]}`) });
// dotenv.config();
//Middleware npm
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
//Middlewares
const routes_1 = __importDefault(require("./routes"));
//AWS logger
// import appLogger from "./utils/logger";
//Database connection
const sequelize_1 = require("./instances/sequelize");
const encrypt_1 = __importDefault(require("./encryption/encrypt"));
// import { log, errorLog } from "./utils/helpers";
// import dotenv from "dotenv";
//swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const routes_2 = __importDefault(require("./routes"));
// dotenv.config();
//PORT
// const PORT = process.env.PORT;
const PORT = 3000;
console.log(process.env.DB_HOST);
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_2.default)(app);
//Express usage
app.use((0, morgan_1.default)("dev", {
    skip: function (req, res) {
        return res.statusCode < 400;
    },
}));
app.use(express_1.default.static("public"));
app.use(express_1.default.text());
app.use(express_1.default.raw());
app.use((0, helmet_1.default)());
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, compression_1.default)());
//Logger
// app.use(appLogger.requestDetails(appLogger));
//Database connection Established
try {
    (0, sequelize_1.verifyDBConnection)();
    console.log("Database connected successfully");
}
catch (e) {
    console.log("Database connection failed", e);
}
// app.use(
//   "/docs",
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: "/swagger.json",
//     },
//   })
// );
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
//Encryption Method
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.REQ_DECRYPTION == "true") {
            console.log("REQ_DECRYPTION");
            yield encrypt_1.default.decryptReq(req, res);
        }
        if (process.env.RES_ENCRYPTION == "true") {
            console.log("RES_ENCRYPTION");
            yield encrypt_1.default.encryptRes(req, res);
        }
        if (process.env.REQ_DECRYPTION != "true") {
            console.log("REQ_DECRYPTION FALSE");
            yield encrypt_1.default.checkForEncryption(req, res);
        }
        // res.set('Cache-control', 'no-cache', 'no-store')
        // res.header('X-Frame-Options', 'SAMEORIGIN')
        // res.removeHeader("X-Powered-By");
        next();
    }
    catch (e) {
        console.log("Error in requestDecryption", e);
    }
}));
//Router path
(0, routes_1.default)(app);
// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });
Promise.all([sequelize_1.sequelize1.sync(), sequelize_1.sequelize2.sync(), sequelize_1.sequelize3.sync()])
    .then(() => {
    // Start the server after models are synchronized
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch(error => {
    console.error('Unable to synchronize models:', error);
});
