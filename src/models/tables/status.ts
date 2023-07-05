import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const Status = sequelize.define(
  'status',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
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