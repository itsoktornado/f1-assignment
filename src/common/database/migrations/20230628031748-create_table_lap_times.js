'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'lap_times',
        {
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
