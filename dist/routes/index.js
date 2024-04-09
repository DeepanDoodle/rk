"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import healthCheck from "./v1/healthCheck.route";
const user_routes_1 = __importDefault(require("./v1/user.routes"));
const bill_routes_1 = __importDefault(require("./v1/bill.routes"));
const initializeRoutes = (app) => {
    console.log("inside route");
    // Routes
    app.use("/v1/user", user_routes_1.default);
    app.use("/v1/bill", bill_routes_1.default);
};
exports.default = initializeRoutes;
