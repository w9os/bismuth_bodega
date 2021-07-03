const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', async (req, res) => {
  try {
  let singleProduct = await Product.findAll(req.body, {
    where: {
      id: req.params.id,
    },
 });res.status(200).json(singleProduct);
} catch (err) {
  res.status(400).json(err);
}
});


// create new product
router.post('/', async (req, res) => {
    try {
      const newProduct = await Product.create({
        ...req.body
      });
        
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// update product
router.put('/:id', async (req, res) => {
  try {
  let updatedProduct = await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
 });res.status(200).json(updatedProduct);
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
  let deletedProduct = await Product.destroy(req.body, {
    where: {
      id: req.params.id,
    },
 });res.status(200).json(deletedProduct);
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
