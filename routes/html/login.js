module.exports = (req, res) => {
    if (req.session.logged_in) res.redirect('/')
    res.render('login')

};

