import { DataTypes } from 'sequelize'
import { sequelize, Sequelize } from '../base'

export const Races = sequelize.define(
  'races',
  {
    raceId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    round: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'circuits',
        key: 'circuitId'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fp1_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fp1_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    fp2_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fp2_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    fp3_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fp3_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    quali_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quali_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    sprint_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sprint_time: {
      type: DataTypes.TIME,
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