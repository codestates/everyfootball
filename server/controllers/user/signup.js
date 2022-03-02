module.exports = (req, res) => {
    console.log('signup')
    res.status(200).json({ "url" : "user/signup/post", "body" : req.body})
}

