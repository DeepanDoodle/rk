"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: "mysql",
    logging: false,
    retry: {
        match: [/Deadlock/i],
        max: 3,
        backoffBase: 1000,
        backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
    },
    pool: {
        max: 100,
        min: 30,
        acquire: 60000,
        idle: 10000
    },
    Dialectoptions: { connectTimeout: 3000 }
};
