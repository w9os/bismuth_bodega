const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Transaction extends Model {}
Transaction.init ({
    id: {
    type: DataType.INT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    product_id: {
        type: DataType.INT,
        references: {
            model: 'product',
            key: 'id',
        }
    },
    product_amount: {
        type: DataType.INT,
    },
    product_price: {
        type: DataType.DEC,
        references: {
            model: 'product',
            key: 'price',
        }
    },
    user_id: {
        type: DataType.INT,
        references: {
            model: 'user',
            key: 'id',
        }
    }
    

})

module.exports = Transaction