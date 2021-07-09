const { Product } = require('../models');

const productData = [
  {
    name: 'Bananas',
    price: 14.99,
    quantity: 36,
    category_id: 5,
    image_url:"https://www.pikpng.com/pngl/m/59-598678_go-back-gt-pix-for-banana-png-donkey.png"
  },  
  {
    name: 'Apples',
    price: 14.99,
    quantity: 40,
    category_id: 5,
    image_url:"https://www.pikpng.com/pngl/m/194-1945877_paula-red-apple-apple-paula-red-apple-png.png"
  },
  {
    name: 'Fabuloso',
    price: 14.99,
    quantity: 20,
    category_id: 3,
    image_url:"https://www.pikpng.com/pngl/m/332-3326535_fabuloso-multiusos-antibacterial-fresca-lavanda-plastic-bottle-clipart.png"
  },
  {
    name: 'Toilet Paper',
    price: .99,
    quantity: 78,
    category_id: 3,
    image_url:"https://www.pikpng.com/pngl/m/463-4633373_good-quality-printed-private-label-tissue-roll-toilet.png"
  },
  {
    name: 'Rice',
    price: 2.99,
    quantity: 20,
    category_id: 4,
    image_url:"https://www.pikpng.com/pngl/m/21-210501_25-kg-net-weight-jasmine-rice-clipart.png"
  },
  {
    name: 'Flour',
    price: 4.99,
    quantity: 90,
    category_id: 4,
    image_url:"https://www.pikpng.com/pngl/m/275-2757637_free-png-flour-png-png-image-with-transparent.png"
  },
  {
    name: 'Soda',
    price: 1.99,
    quantity: 25,
    category_id: 2,
    image_url:"https://www.pngfind.com/pngs/m/172-1728435_png-soda-can-tr-source-coca-cola-transparent.png"
  },
  {
    name: 'Gatorade',
    price: 2.50,
    quantity: 48,
    category_id: 2,
    image_url:"https://www.pikpng.com/pngl/m/152-1527375_gatorade-sports-drink-tropical-fruit-500-ml-gatorade.png"
  },
  {
    name: 'Poland Spring',
    price: 1.50,
    quantity: 64,
    category_id: 2,
    image_url:"https://www.pikpng.com/pngl/m/136-1361893_poland-spring-natural-spring-water-poland-spring-64.png"
  },
  {
    name: 'Ice cream',
    price: 1.99,
    quantity: 20,
    category_id: 1,
    image_url:"https://www.pikpng.com/pngl/m/58-582266_ice-cream-magnum-ice-cream-vector-clipart.png"
  },
  {
    name: 'Frozen Peas',
    price: 2.99,
    quantity: 30,
    category_id: 1,
    image_url:"https://www.pikpng.com/pngl/m/242-2426592_frozen-treat-green-peas-.png"
  }

];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
