// const { user } = require('../../models')
module.exports = (req, res) => {
    // user.findOne({where : {
    //     id: 'rkdghwnd'
    // }})
    // .then((response) => {
    //     console.log('ok')
    // })
    // console.log('signup')
    res.status(200).json({ "url" : "user/signup/post", "body" : req.body})
}

