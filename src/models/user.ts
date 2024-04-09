// import {  Model, DataTypes } from "sequelize";
// import { sequelize1 } from "../instances/sequelize";

// export class User extends Model {
//   id!: number;
//   userName!: string;
//   vendorName!: string;
//   password!: string;
//   email!: string;
//   createdAt!: Date;
//   updatedAt!: Date;
// }

// (User as any).init(
//   {
//     SUPCODE: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     PARTY_TYP: {
//       type: DataTypes.STRING(1),
//       allowNull: false,
//     },
//     NAME: {
//       type: new DataTypes.STRING(100),
//       allowNull: true,
//     },
//     ADD1: {
//       type:  DataTypes.STRING(40),
//       allowNull: true,
//       unique: true,
//     },
//     ADD2: {
//         type: DataTypes.STRING(40),
//         allowNull: true,
//       },
//       ADD3: {
//         type: DataTypes.STRING(40),
//         allowNull: true,
//       },
//       ADD4: {
//         type: DataTypes.STRING(40),
//         allowNull: true,
//       },
//       ADD5: {
//         type: DataTypes.STRING(40),
//         allowNull: true,
//       },
//       COUNTRY: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//       },
//       STATE: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//       },
//       PINCODE: {
//         type: DataTypes.STRING(10),
//         allowNull: true,
//       },
//       ABRVAT: {
//         type: DataTypes.STRING(5),
//         allowNull: true,
//       },
//       UP_FL: {
//         type: DataTypes.STRING(1),
//         allowNull: true,
//       },
//       SRLNO: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       UPDATED: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: false,
//       },
//       COMPCODE: {
//         type: DataTypes.STRING(3),
//         allowNull: false,
//       },
//       ACTIVE: {
//         type: DataTypes.STRING(1),
//         allowNull: true,
//       },
//     },
 
//     {
//         sequelize: sequelize1, // Pass your Sequelize instance
//         tableName: 'users', // Name of the table in the database
//         timestamps: false, // Disable timestamps (createdAt and updatedAt)
//       }
// );

// // sequelize1.sync();
