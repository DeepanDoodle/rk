import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { allow } from "joi";

export class UserSession extends Model {
  id!: number;
  user_name!: string;
  vendorName!: string;
  password!: string;
  email!: string;
  logged_session!: Date;
  sup_code!: string;
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
    user_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    logged_session: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sup_code: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    no_of_times_loggedIn: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue: 0,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "userSession",
    sequelize: sequelize2,
    hooks: {
      beforeCreate: (userSession: UserSession) => {
        userSession.logged_session = new Date();
      },
    },
  }
);

// sequelize1.sync();
