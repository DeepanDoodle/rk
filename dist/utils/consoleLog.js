"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLog = void 0;
class ConsoleLog {
    constructor() {
        // log = (...data: any[]) => {
        //     return console.log('\x1b[36m%s\x1b[0m', ...data);
        // };
        this.info = (...data) => {
            return console.log('\x1b[36m%s', ...data);
        };
        this.warn = (...data) => {
            return console.log('\x1b[33m%s', ...data);
        };
        this.errorLog = (...data) => {
            return console.log('\x1b[31m%s', ...data);
        };
    }
    static log(...data) {
        return console.log('\x1b[36m%s\x1b[0m', ...data);
    }
}
exports.ConsoleLog = ConsoleLog;
