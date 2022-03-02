
module.exports = (req, res) => {
    console.log('changeinfo')
    res.status(200).json({ "url" : "user/changeinfo/post", "body" : req.body})
}

