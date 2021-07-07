const { Product } = require('../../models')

module.exports = async (req, res, next) => {
    //get all products
    try {
        const products = await Product.findAll({})
        const productsData = products.map(prod => prod.get({ plain: true }))
        console.log(productsData)

        //pass to template  
        res.render('home', { products: productsData })
    } catch (err) { next(err) }
}





