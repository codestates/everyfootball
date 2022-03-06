const { users } = require('../../models');

module.exports = async (req, res) => {
    const isExisted = await users.findOne({
    where : { userid : req.body.userid }
    })
		
		if(!isExisted){
			res.status(200).send({message : 'new'})
		}else{
			res.status(404).send({message : 'exist'})
		}
}


