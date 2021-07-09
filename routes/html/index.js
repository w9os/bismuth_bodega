const router = require('express').Router();

const home = require('./home');
const login = require('./login');

router.use('/login', login);
router.use('/', authenticate, home);

module.exports = router

function authenticate (req, res, next) {
    if (!req.session.logged_in) res.redirect('/login')
    next()
}