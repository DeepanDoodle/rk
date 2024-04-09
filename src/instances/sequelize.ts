// import * as Sequelize from 'sequelize'
import { Options, Sequelize } from "sequelize";

import { dbConfig } from "../config/dbConfig";

// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config1: Options = {
  username: "deepanrvdvenu@gmailcom",
  password: "sqlpassword",
  database: "rkmaster",
  host: "localhost",
  dialect: "mysql",
};

const config2: Options = {
  username: "deepanrvdvenu@gmailcom",
  password: "sqlpassword",
  database: "rvd",
  host: "localhost",
  dialect: "mysql",
};

const config3: Options = {
  username: "deepanrvdvenu@gmailcom",
  password: "sqlpassword",
  database: "rkstore",
  host: "localhost",
  dialect: "mysql",
};

export const sequelize1 = new Sequelize(
  "rkmaster",
  "deepanrvdvenu@gmail.com",
  "sqlpassword",
  config1
);

export const sequelize2 = new Sequelize(
  "rvd",
  "deepanrvdvenu@gmail.com",
  "sqlpassword",
  config2
);

export const sequelize3 = new Sequelize(
  "rkstore",
  "deepanrvdvenu@gmail.com",
  "sqlpassword",
  config3
);

export const verifyDBConnection = async () => {
  await Promise.all([sequelize1.authenticate(), sequelize2.authenticate(),sequelize3.authenticate()]);
};
