'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'races',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          year: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          round: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          circuit_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'circuits',
              key: 'id'
            }
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
          },
          time: {
            type: Sequelize.DataTypes.TIME,
            allowNull: true
          },
          url: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          fp1_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true
          },
          fp1_time: {
            type: Sequelize.DataTypes.TIME,
            allowNull: true
          },
          fp2_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true
          },
          fp2_time: {
            type: Sequelize.DataTypes.TIME,
            allowNull: true
          },
          fp3_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true
          },
          fp3_time: {
            type: Sequelize.DataTypes.TIME,
            allowNull: true
          },
          quali_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true
          },
          quali_time: {
            type: Sequelize.DataTypes.TIME,
            allowNull: true
          },
          sprint_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true
          },
          sprint_time: {
            type: Sequelize.DataTypes.TIME,
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
      await queryInterface.dropTable('races', { transaction })
    })
  }
};
