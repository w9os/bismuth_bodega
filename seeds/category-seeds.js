const { Category } = require('../models');

const categoryData = [
  {
    name: 'Household',
    categoryimgurl:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    category_id:3
  },
  {
    name: 'Fresh-produce',
    categoryimgurl:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    category_id:5  
  },
  {
    name: 'Frozen-goods',
    categoryimgurl:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    category_id:1
  },
  {
    name: 'Beverages',
    categoryimgurl:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    category_id:2
  },
  {
  name: 'Dry-goods',
  categoryimgurl:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
  category_id:4
  }
  ];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
