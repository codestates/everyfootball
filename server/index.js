const express = require('express');
const cors = require("cors");
const app = express();
const usercontrollers = require("./controllers");
const matchcontrollers = require("./controllers");
const port = 4000

const db = require('./models')

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.post("/user/login", usercontrollers.login);
app.post("/user/signup", usercontrollers.signup);
app.post("/user/signout", usercontrollers.signout);
app.get("/user/userinfo", usercontrollers.userinfo);
app.post("/user/changeinfo", usercontrollers.changeinfo);
app.get("/match/data/:matchid", matchcontrollers.data);
app.get("/match/showmatchlist",matchcontrollers.showmatchlist);
app.get("/match/record",matchcontrollers.record);
app.post("/match/sendresult",matchcontrollers.sendresult);
app.get("/match/joinmatch/:matchid",matchcontrollers.joinmatch)
app.post("/user/existedid",usercontrollers.existedid)

db.sequelize.sync().then((req) => {
  app.listen(port, function (){
    console.log(`listen on ${port}`)  
  });
});
