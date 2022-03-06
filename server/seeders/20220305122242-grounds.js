'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let name = ["피엘폿볼아카데미", "누리풋볼", "스타풋살장", "압구정풋살스튜디오","잠실종합운동장제1풋살장"]
    let location = ["서울특별시 강남구 논현로86길 34 B2",
    "서울특별시 강남구 논현로 748 지하1층",
    "서울특별시 서초구 매헌로 16 라시따 7층",
    "서울특별시 강남구 압구정로50길 28 지하1층",
    "서울특별시 송파구 올림픽로 25 잠실종합운동장제1풋살장",
  ]
    let img = ["https://user-images.githubusercontent.com/91925895/156883345-ca44b24b-3e82-4458-8efb-e7332bf2f2d6.png",
  "https://user-images.githubusercontent.com/91925895/156883400-8928e568-9db1-4e3f-9743-a15d0c24b110.png",
"https://user-images.githubusercontent.com/91925895/156883406-09137550-ab61-4856-b1be-9dbe1cbacc74.png",
"https://user-images.githubusercontent.com/91925895/156883412-c7659299-1126-4e52-bf91-0496f964edd2.png",
"https://user-images.githubusercontent.com/91925895/156883440-13fb9a65-32c4-4a86-9e85-d693955eef3d.png"]

    let datas = [];
    for(let i = 0; i < 5; i++){
      let obj = {
        groundid: i,
        name: name[i],
        location: location[i],
        parking : i%2===0 ? true : false,
        toilet : i%2===0 ? true : false,
        shower : i%2===0 ? true : false,
        img : img[i],
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }

    return queryInterface.bulkInsert('grounds', datas, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('grounds', null, {});

  }
};
