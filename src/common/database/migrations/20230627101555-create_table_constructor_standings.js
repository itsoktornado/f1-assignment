'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'constructor_standings',
        {
          constructorStandingsId: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          raceId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'races',
              key: 'raceId'
            }
          },
          constructorId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'constructors',
              key: 'constructorId'
            }
          },
          points: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
          },
          position: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          positionText: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          wins: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          }
        },
        {
          transaction
        }
      )
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('constructor_standings', { transaction })
    })
  }
};
