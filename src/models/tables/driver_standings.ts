import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const DriverStandings = sequelize.define(
  'driver_standings',
  {
    driverStandingsId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'races',
        key: 'raceId'
      }
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'drivers',
        key: 'driverId'
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
    positionText: {
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