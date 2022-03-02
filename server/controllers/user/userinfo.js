module.exports = (req, res) => {
    console.log('userinfo')
    res.status(200).json({ "url" : "user/userinfo/get", "body" : req.body})
}

