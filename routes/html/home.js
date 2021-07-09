const { Product } = require('../../models');

module.exports = async (req, res, next) => {
    //get all products
    try {
        const products = await Product.findAll({})
        const productsData = products.map(prod => prod.get({ plain: true }))

        //pass to template  
        res.render('home', { products: productsData })
        console.log(req.session)
    } catch (err) { next(err) }
};





