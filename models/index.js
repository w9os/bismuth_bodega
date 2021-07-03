// import models
const Product = require('./Product');
const Category = require('./Category');
const Transaction = require('./transaction');
const User = require('./User');


Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Transaction.hasMany(Product, {
  foreignKey:{
    name: 'product_id',
    onDelete: 'CASCADE',
}});


Transaction.hasMany(User, {
  foreignKey:{
    name: 'user_id',
    onDelete: 'CASCADE',
}});


module.exports = {
  Product,
  Category,
  Transaction,
  User,
};
