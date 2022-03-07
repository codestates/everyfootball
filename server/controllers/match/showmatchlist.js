const { sequelize ,playerinmatches, users,matches} = require('../../models');

module.exports = async(req, res) => {

    const matches = await matches.findAll({
        where : {
            matchend : false
        }
    })

    console.log('showmatchlist')
    res.status(200).json({ matches : matches})
}

