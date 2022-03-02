module.exports = (req, res) => {
    console.log('record')
    res.status(200).json({ "url" : "match/record/get", "body" : req.body})
}

