// 회원가입할때 id 중복확인하는 라우터 미들웨어 입니다.
// 아래 문장, users 모델을 가져와서 findOne 메소드를
// 사용해야 서버쪽 작성이 가능한데 npm start 하면
// 에러가 뜨는 상황

const { users } = require('../../models');

module.exports = async (req, res) => {
    const isExisted = await users.findOne({
    where : { userid : req.body.id }
    })
		
		if(!isExisted){
			res.status(200).send({message : 'new'})
		}else{
			res.status(401).send({message : 'exist'})
		}


}

  if (!isExisted) {
    res.status(404).send({ message: "new" });
  } else {
    res.status(200).send({ message: "exist" });
  }
};
