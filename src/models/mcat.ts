import { Model, DataTypes } from "sequelize";
import { sequelize1 } from "../instances/sequelize";

export class mcat extends Model {
  public ACTIVE!: string;
  public ATTACHMENT_COMMENTS!: string;
  public ATTACHMENTS!: string;
  public MCATCODE!: string;
  public MCATDESC!: string;
  public PROCESS_AC_CD?: string | null;
  public PROCESS_AC_CD_OTH?: string | null;
  public PURCH_AC_CD?: string | null;
  public PURCH_AC_CD_OTH?: string | null;
}

mcat.init(
  {
    ACTIVE: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ATTACHMENT_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ATTACHMENTS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    MCATCODE: {
      type: DataTypes.STRING(1),
      primaryKey: true,
      allowNull: false,
    },
    MCATDESC: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    PROCESS_AC_CD: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    PROCESS_AC_CD_OTH: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    PURCH_AC_CD: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    PURCH_AC_CD_OTH: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
  },
  {
    tableName: "mcat",
    sequelize: sequelize1,
  }
);

export default mcat;
