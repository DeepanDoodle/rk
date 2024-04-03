"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const response_1 = __importDefault(require("../responses/response"));
const code_1 = require("../responseCode/code");
const handler_1 = require("../exceptions/handler");
// const MessageTypes = require('../responses/types');
const consoleLog_1 = require("../utils/consoleLog");
/**
 * Base controller class which inherits all util methods
 * to use in the derived classes
 */
class BaseController {
    constructor() {
        // Method to send success response
        this.success = response_1.default.success;
        // Method to send error response
        this.errors = response_1.default.errors;
        // Status code
        this.status = code_1.ResponseStatus;
        // Success status message
        // this.messageTypes = MessageTypes;
        // Exception messages
        this.exceptions = handler_1.ExceptionErrors;
        this.consolelogs = consoleLog_1.ConsoleLog;
    }
}
exports.BaseController = BaseController;
// export default new BaseController();
