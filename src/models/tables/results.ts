import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const Results = sequelize.define(
  'results',
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
    constructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'constructors',
        key: 'id'
      }
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position_order: {
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
    fastest_lap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fastest_lap_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fastest_lap_speed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
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