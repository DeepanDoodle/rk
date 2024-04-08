// Import Sequelize module and DataTypes
import { Model, DataTypes } from 'sequelize';
import { sequelize1 } from '../instances/sequelize'; // Import your Sequelize instance

// Define the User model
export class chart_slacc extends Model {}

// Initialize the Account model
chart_slacc.init(
  {
    ACC_TYPE: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
    },
    SUBL_CODE: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    SUBL_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    PAYCODE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ACC_CODE: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    CHEQ_NAME: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    CSTNO: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    LSTNO: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    GRP_CODE: {
      type: DataTypes.CHAR(2),
      allowNull: true,
    },
    AGNT_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    AGNT_CODE: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    VAL_DESC1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    VAL_DESC1DB: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    VAL_DESC1TBL: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    VAL_DESC1FLD: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    VAL_DESC2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    VAL_DESC2DB: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    VAL_DESC2TBL: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    VAL_DESC2FLD: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    SUB_LEG_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    COUNTRY: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    STATE: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    TDS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    PANNO: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ACTIVE: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    USER: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    PASSWORD: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    ATTACHMENTS: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ATTACHMENT_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    copy_flag: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize1, 
    tableName: 'chart_slacc', 
    timestamps: false, 
  }
);