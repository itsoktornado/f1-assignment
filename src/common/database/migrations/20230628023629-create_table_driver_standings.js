'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'driver_standings',
        {
          driverStandingsId: {
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
          driverId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'drivers',
              key: 'driverId'
            }
          },
          points: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
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
            allowNull: false,
            defaultValue: 0
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
      await queryInterface.dropTable('driver_standings', { transaction })
    })
  }
};
