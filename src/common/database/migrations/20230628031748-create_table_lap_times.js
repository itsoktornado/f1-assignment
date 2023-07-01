'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'lap_times',
        {
          raceId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'races',
              key: 'raceId'
            }
          },
          driverId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'drivers',
              key: 'driverId'
            }
          },
          lap: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          position: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          time: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          milliseconds: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          }
        }
      )
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('lap_times', { transaction })
    })
  }
};
