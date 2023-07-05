import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const Constructors = sequelize.define(
  'constructors',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    constructor_ref: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
		hooks: {

		},
		timestamps: true,
		underscored: true,
		freezeTableName: true,
		paranoid: true,
		defaultScope: {
			attributes: { exclude: ['deletedAt'] },
		},
		scopes: {
			deleted: {
				where: { deletedAt: { $ne: null } },
				paranoid: false,
			},
		},
	},
)