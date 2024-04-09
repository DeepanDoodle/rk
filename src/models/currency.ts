import { Model, DataTypes } from "sequelize";
import { sequelize1 } from "../instances/sequelize";

export class currency extends Model {
  public id!: number;
  public CUR_CODE!: string;
  public FST_NAME?: string | null;
  public SND_NAME?: string | null;
  public CURRCODE?: string | null;
  public ACTIVE!: string;
  public ATTACHMENTS!: string;
  public ATTACHMENT_COMMENTS!: string;
}

currency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    CUR_CODE: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    FST_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    SND_NAME: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    CURRCODE: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    ACTIVE: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ATTACHMENTS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ATTACHMENT_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "currency",
    sequelize: sequelize1,
  }
);

export default currency;
