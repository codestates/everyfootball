module.exports = (req, res) => {
    console.log('data')
    res.status(200).json({ "url" : "match/data/get", "body" : req.body})
}

