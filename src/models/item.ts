import { Model, DataTypes } from 'sequelize';
import { sequelize1 } from '../instances/sequelize';
class item extends Model {
  public MCATCODE!: string;
  public MCATDESC!: string;
  public PURCH_AC_CD!: string | null;
  public PURCH_AC_CD_OTH!: string | null;
  public PROCESS_AC_CD!: string | null;
  public PROCESS_AC_CD_OTH!: string | null;
  public ACTIVE!: string;
  public ATTACHMENTS!: string;
  public ATTACHMENT_COMMENTS!: string;
}

item.init(
  {
    MCATCODE: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    MCATDESC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PURCH_AC_CD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PURCH_AC_CD_OTH: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PROCESS_AC_CD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PROCESS_AC_CD_OTH: {
      type: DataTypes.STRING,
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
    sequelize:sequelize1,
    modelName: 'product', // Set the table name explicitly
    timestamps: false, // Disable timestamps columns (createdAt, updatedAt)
  }
);

export default item;