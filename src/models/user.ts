import {  Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export class User extends Model {
  id!: number;
  userName!: string;
  vendorName!: string;
  password!: string;
  email!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

(User as any).init(
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
    vendorName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
      unique:true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: true,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);

sequelize.sync();
