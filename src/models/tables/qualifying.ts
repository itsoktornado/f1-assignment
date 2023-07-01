import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const Qualifying = sequelize.define(
  'qualifying',
  {
    qualifyId: {
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
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    q1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    q2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    q3: {
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