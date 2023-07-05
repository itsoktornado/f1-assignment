'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'constructor_results',
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
          constructor_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'constructors',
              key: 'id'
            }
          },
          points: {
            type: Sequelize.DataTypes.FLOAT,
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
        },
        {
          transaction
        }
      )
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('constructor_results', { transaction })
    })
  }
};
