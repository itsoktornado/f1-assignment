import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const ConstructorStandings = sequelize.define(
  'constructor_standings',
  {
    id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
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
    constructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'constructors',
        key: 'id'
      }
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false
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