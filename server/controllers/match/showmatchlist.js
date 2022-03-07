const { matchs } = require('../../models');


module.exports = async(req, res) => {

    const matches = await matchs.findAll({
        where : {
            matchend : false
        }
    })

    console.log('showmatchlist')
    res.status(200).json({ matches : matches})
}

