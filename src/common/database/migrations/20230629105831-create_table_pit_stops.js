'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'pit_stops',
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
          stop: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          lap: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          time: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          duration: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          milliseconds: {
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
      await queryInterface.dropTable('pit_stops', { transaction })
    })
  }
};
