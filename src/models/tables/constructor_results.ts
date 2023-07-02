import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const ConstructorResults = sequelize.define(
  'constructor_results',
  {
    constructorResultsId: {
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
    constructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'constructors',
        key: 'constructorId'
      }
    },
    points: {
      type: DataTypes.FLOAT,
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