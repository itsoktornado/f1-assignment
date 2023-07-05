'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'qualifying',
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
          position: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          q1: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          q2: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          q3: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
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
      await queryInterface.dropTable('qualifying', { transaction })
    })
  }
};
