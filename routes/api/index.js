const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
// const transactionRoutes = require('./transaction-routes');
// const userRoutes = require('./user-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
// router.use('/transaction', transactionRoutes);
// router.use('/user', userRoutes);

module.exports = router;
