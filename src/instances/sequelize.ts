// import * as Sequelize from 'sequelize'
import { Options, Sequelize } from 'sequelize';

import { dbConfig } from '../config/dbConfig'

// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config: Options = {
  username:"deepanrvdvenu@gmailcom",
  password:"sqlpassword",
  database: "rvd",
  host: "localhost",
  dialect: 'mysql'
};
export const sequelize = new Sequelize("rvd", "deepanrvdvenu@gmail.com", "sqlpassword", config);


export const verifyDBConnection = async () => {
  // Verify Database connection
 return await sequelize.authenticate()
};