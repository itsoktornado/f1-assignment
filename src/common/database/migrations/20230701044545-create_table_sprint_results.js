'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'sprint_results',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          race_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'races',
              key: 'id'
            }
          },
          driver_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'drivers',
              key: 'id'
            }
          },
          constructor_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'constructors',
              key: 'id'
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
          position_text: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          position_order: {
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
          fastest_lap: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true
          },
          fastest_lap_time: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          status_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'status',
              key: 'id'
            }
          },
          created_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          deleted_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
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
