// import * as Sequelize from 'sequelize'
import { Options, Sequelize } from 'sequelize';

import { dbConfig } from '../config/dbConfig'

// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config1:Options = {
  username: "root",  password: "Rishvan3@",
  database: "rkismaster",  host: "localhost",
  dialect: 'mysql'};
const config2: Options = {
  username:"deepanrvdvenu@gmailcom",
  password:"sqlpassword",
  database: "rvd",
  host: "localhost",
  dialect: 'mysql'
};
export const sequelize1 = new Sequelize("db1", "root", "Rishvan3@", config1);

export const sequelize2 = new Sequelize("rvd", "deepanrvdvenu@gmail.com", "sqlpassword", config2);


export const verifyDBConnection = async () => {
  // Verify Database connection
 await Promise.all([ sequelize1.authenticate(), sequelize2.authenticate()])

};