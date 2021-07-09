const router = require('express').Router();
const { Product, Transaction } = require('../../models');

// get all transactions
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
     await Transaction.create({
        ...req.body
      });
        
      res.status(200).redirect('/');
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
