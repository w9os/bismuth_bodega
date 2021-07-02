const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Priveleges',
  },
  {
    category_name: 'users',
  },
  {
    category_name: 'transactions',
  },
  {
    category_name: 'products',
  },
  ];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
