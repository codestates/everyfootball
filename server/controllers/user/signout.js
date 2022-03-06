const { users } = require('../../models');

module.exports = (req, res) => {
    users.destroy({
        where : {
            userid : req.body.userid
        }
    }).then(res.status(200).json({message : "Sign out done!"}))


}

