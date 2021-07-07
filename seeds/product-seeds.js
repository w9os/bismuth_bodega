const { Product } = require('../models');

const productData = [
  {
    name: 'Bananas',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c137.png"
  },  
  {
    name: 'apples',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c137.png"
  },
  {
    name: 'Fabuloso',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://www.fabuloso.com/content/dam/cp-sites/home-care/fabuloso/packshots/carousel-images/lavender/lavender-500ml.png"
  },
  {
    name: 'Rice',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://www.fabuloso.com/content/dam/cp-sites/home-care/fabuloso/packshots/carousel-images/lavender/lavender-500ml.png"
  },
  {
    name: 'Flour',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://www.fabuloso.com/content/dam/cp-sites/home-care/fabuloso/packshots/carousel-images/lavender/lavender-500ml.png"
  },
  {
    name: 'Sprite',
    price: 14.99,
    quantity: 14,
    category_id: 1,
    image_url:"https://www.fabuloso.com/content/dam/cp-sites/home-care/fabuloso/packshots/carousel-images/lavender/lavender-500ml.png"
  },

];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
