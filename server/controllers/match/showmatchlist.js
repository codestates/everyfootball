const { matches } = require('../../models');

module.exports = async(req, res) => {

    const matchlist = await matches.findAll({
        where : {
            matchend : false
        }
    })

    console.log(matchlist.length)
    res.status(200).json({ matches : matchlist})
}

