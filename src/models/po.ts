// Import necessary modules
import { Model, DataTypes } from "sequelize";
import { sequelize3 } from "../instances/sequelize"; // assuming you have a sequelize instance set up

// Define the po model
class po extends Model {
  public CCODE!: string;
  public PONO!: string;
  public PODATE!: Date;
  public POTYPE!: string;
  public BUYERCODE!: string;
  public BUYCODE!: string;
  public PROTYPE!: string;
  public ISN_NO!: string;
  public CORD_SLNO!: string;
  public SUPCODE!: string;
  public ADD_SLNO!: number;
  public CUR_CODE!: string;
  public EX_RATE!: number;
  public PAYCODE!: number;
  public WASHING!: string;
  public DELVTERM!: string;
  public status!: string;
  public comments!: string;
  public REM1!: string;
  public REM2!: string;
  public REM3!: string;
  public REM4!: string;
  public REM5!: string;
  public REM6!: string;
  public SIZE_INFO!: string;
  public QUALITY!: string;
  public INCL_TAX!: string;
  public CORD_CODE!: string;
  public CONFIRM!: string;
  public UP_LOADED!: string;
  public REF_CLOSE!: string;
  public CTRLNO!: string;
  public NEWPONO!: string;
  public NEWPONO1!: string;
  public REV_NO!: number;
  public LOC_ID!: number;
  public copy_flag!: number;
  public edit_flag!: number;
}

// Initialize the po model
po.init(
  {
    CCODE: DataTypes.STRING,
    PONO: DataTypes.STRING,
    PODATE: DataTypes.DATE,
    POTYPE: DataTypes.STRING,
    BUYERCODE: DataTypes.STRING,
    BUYCODE: DataTypes.STRING,
    PROTYPE: DataTypes.STRING,
    ISN_NO: DataTypes.TEXT,
    CORD_SLNO: DataTypes.STRING,
    SUPCODE: DataTypes.STRING,
    ADD_SLNO: DataTypes.INTEGER,
    CUR_CODE: DataTypes.STRING,
    EX_RATE: DataTypes.DOUBLE,
    PAYCODE: DataTypes.INTEGER,
    WASHING: DataTypes.STRING,
    DELVTERM: DataTypes.STRING,
    status: DataTypes.STRING,
    comments: DataTypes.TEXT,
    REM1: DataTypes.TEXT,
    REM2: DataTypes.STRING,
    REM3: DataTypes.STRING,
    REM4: DataTypes.STRING,
    REM5: DataTypes.STRING,
    REM6: DataTypes.STRING,
    SIZE_INFO: DataTypes.STRING,
    QUALITY: DataTypes.STRING,
    INCL_TAX: DataTypes.STRING,
    CORD_CODE: DataTypes.STRING,
    CONFIRM: DataTypes.STRING,
    UP_LOADED: DataTypes.STRING,
    REF_CLOSE: DataTypes.STRING,
    CTRLNO: DataTypes.STRING,
    NEWPONO: DataTypes.STRING,
    NEWPONO1: DataTypes.STRING,
    REV_NO: DataTypes.INTEGER,
    LOC_ID: DataTypes.INTEGER,
    copy_flag: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    edit_flag: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelize3,
    tableName: "purchase_order", // Set the table name explicitly
    timestamps: false, // Disable timestamps columns (createdAt, updatedAt)
  }
);

// Export the po model
export default po;
