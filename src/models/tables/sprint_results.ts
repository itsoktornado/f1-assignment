import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const SprintResults = sequelize.define(
  'sprint_results',
  {
    resultId: {
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
    constructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'constructors',
        key: 'constructorId'
      }
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    positionText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    positionOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    laps: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fastestLap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fastestLapTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'statusId'
      }
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