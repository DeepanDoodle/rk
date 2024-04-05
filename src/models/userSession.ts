import {  Model, DataTypes } from "sequelize";
import { sequelize1 } from "../instances/sequelize";

export class UserSession extends Model {
  id!: number;
  userName!: string;
  vendorName!: string;
  password!: string;
  email!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

(UserSession as any).init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    // vendorName: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: true,
    //   unique:true,
    // },
    // email: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: true,
    //   unique: true,
    // },
    // password: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: false,
    // },
    loggedSession: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "userSession",
    sequelize:sequelize1, 
  }
);

// sequelize1.sync();
