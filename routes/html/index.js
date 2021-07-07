const router = require('express').Router();

const home = require('./home');
const login = require('./login');

router.use('/login', login);
router.use('/', home);

module.exports = router