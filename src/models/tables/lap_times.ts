import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const LapTimes = sequelize.define(
  'lap_times',
  {
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'races',
        key: 'id'
      }
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'drivers',
        key: 'id'
      }
    },
    lap: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    milliseconds: {
      type: DataTypes.INTEGER,
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