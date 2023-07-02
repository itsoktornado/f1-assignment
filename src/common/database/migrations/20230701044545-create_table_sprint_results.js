'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'sprint_results',
        {
          resultId: {
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
          constructorId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'constructors',
              key: 'constructorId'
            }
          },
          number: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          grid: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          position: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true
          },
          positionText: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          positionOrder: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          points: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
          },
          laps: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          time: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          milliseconds: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true
          },
          fastestLap: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true
          },
          fastestLapTime: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          statusId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'status',
              key: 'statusId'
            }
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
      await queryInterface.dropTable('sprint_results', { transaction })
    })
  }
};
