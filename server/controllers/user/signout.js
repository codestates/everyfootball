
module.exports = (req, res) => {
    console.log('signout')
    res.status(200).json({ "url" : "user/signout/post", "body" : req.body})
}

