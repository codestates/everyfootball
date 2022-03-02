module.exports = (req, res) => {
    console.log('showmatchlist')
    res.status(200).json({ "url" : "match/showmatchlist/get", "body" : req.body})
}

