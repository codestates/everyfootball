const { sequelize ,playerinmatches, users} = require('../../models');


module.exports = async (req, res) => {

    let data = req.body.data
    let matchid = req.body.matchid

    data.forEach(async (el) => {
        playerinmatches.update(el, {where : {matchid:matchid, userid : el.userid}})

        payload = {
            totalGoal : await playerinmatches.sum('goal', {where : {userid :el.userid}}),
            totalShooting : await playerinmatches.sum('shooting', {where : {userid :el.userid}}),
            totalAssist : await playerinmatches.sum('assist', {where : {userid :el.userid}}),
            totalWin : await playerinmatches.sum('win',{where : {userid :el.userid}})
        }

        users.update(payload, {where : {userid : el.userid}})
        
    });

    res.status(200).json({message : "upload done!"})

}
