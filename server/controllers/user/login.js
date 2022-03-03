const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    console.log('login')
    res.status(200).json({ "url" : "user/login/post!", "body" : req.body})
}

