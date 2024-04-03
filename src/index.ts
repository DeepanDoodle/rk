//Env
import { join, resolve } from "path";
import dotenv from "dotenv";
import { argv } from "process";
dotenv.config({ path: join(__dirname, "..", `${argv[2]}`) });

// dotenv.config();
//Middleware npm
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

//Middlewares
import Router from "./routes";

//AWS logger
// import appLogger from "./utils/logger";

//Database connection
import { sequelize, verifyDBConnection } from "./instances/sequelize";

import ReqResEncrypt from "./encryption/reqrescrypt";
import Encryption from "./encryption/encrypt";
// import { log, errorLog } from "./utils/helpers";
// import dotenv from "dotenv";
//swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import initializeRoutes from "./routes";
// dotenv.config();
//PORT
// const PORT = process.env.PORT;
const PORT = 3000;
console.log(process.env.DB_HOST);

const app = express();
app.use(express.json());

initializeRoutes(app);
//Express usage
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);
app.use(express.static("public"));
app.use(express.text());
app.use(express.raw());
app.use(helmet());
app.use(cors());
app.use(compression());

//Logger
// app.use(appLogger.requestDetails(appLogger));

//Database connection Established
try {
  verifyDBConnection();
  console.log("Database connected successfully");
} catch (e) {
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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Encryption Method
app.use(async (req: any, res: any, next) => {
  try {
    if (process.env.REQ_DECRYPTION == "true") {
      console.log("REQ_DECRYPTION");
      await Encryption.decryptReq(req, res);
    }
    if (process.env.RES_ENCRYPTION == "true") {
      console.log("RES_ENCRYPTION");
      await Encryption.encryptRes(req, res);
    }

    if (process.env.REQ_DECRYPTION != "true") {
      console.log("REQ_DECRYPTION FALSE");
      await Encryption.checkForEncryption(req, res);
    }
    // res.set('Cache-control', 'no-cache', 'no-store')
    // res.header('X-Frame-Options', 'SAMEORIGIN')
    // res.removeHeader("X-Powered-By");
    next();
  } catch (e) {
    console.log("Error in requestDecryption", e);
  }
});

//Router path
Router(app);

// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });

sequelize.sync()
  .then(() => {
    // Start the server after models are synchronized
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });