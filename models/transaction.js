const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Transaction extends Model {}
Transaction.init ({
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
    },
    product_amount: {
        type: DataTypes.INTEGER,
    },
   
    user_id: {
        type: DataTypes.INTEGER,
    }},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction',
    }

)

module.exports = Transaction