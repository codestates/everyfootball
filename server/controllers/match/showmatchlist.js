const { matches } = require('../../models');

module.exports = async (req, res) => {
    console.log('showmatchlist')
    const matchlist = await matches.findAll()
    res.status(200).json({ "matchlist" : matchlist})

    
}

