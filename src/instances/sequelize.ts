// import * as Sequelize from 'sequelize'
import { Options, Sequelize } from "sequelize";

import { dbConfig } from "../config/dbConfig";

// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config1: Options = {
  username: "root",
  password: "Rishvan3@",
  database: "rk_master",
  host: "localhost",
  dialect: "mysql",
};

const config2: Options = {
  username: "root",
  password: "Rishvan3@",
  database: "user",
  host: "localhost",
  dialect: "mysql",
};

const config3: Options = {
  username: "root",
  password: "Rishvan3@",
  database: "rkstore",
  host: "localhost",
  dialect: "mysql",
};

export const sequelize1 = new Sequelize(
  "rk_master",
  "root",
  "Rishvan3@",
  config1
);

export const sequelize2 = new Sequelize(
  "user",
  "root",
  "Rishvan3@",
  config2
);

export const sequelize3 = new Sequelize(
  "rkstore",
  "root",
  "Rishvan3@",
  config3
);

export const verifyDBConnection = async () => {
  await Promise.all([sequelize1.authenticate(), sequelize2.authenticate(),sequelize3.authenticate()]);
};
