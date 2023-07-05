import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const DriverStandings = sequelize.define(
  'driver_standings',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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