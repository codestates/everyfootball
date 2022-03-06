const express = require('express');
const cors = require("cors");
const app = express();
const usercontrollers = require("./controllers");
const matchcontrollers = require("./controllers");
const port = 4000

const db = require('./models');
const leavematch = require('./controllers/match/leavematch');

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.post("/user/login", usercontrollers.login);
app.post("/user/signup", usercontrollers.signup);
app.post("/user/signout", usercontrollers.signout);
app.get("/user/userinfo", usercontrollers.userinfo);
app.get("/user/existedid", usercontrollers.existedid);
app.post("/user/changeinfo", usercontrollers.changeinfo);
app.get("/match/data/:matchid", matchcontrollers.data);
app.get("/match/showmatchlist",matchcontrollers.showmatchlist);
app.get("/match/record",matchcontrollers.record);
app.post("/match/sendresult",matchcontrollers.sendresult);
app.get("/match/joinmatch/:matchid",matchcontrollers.joinmatch);
app.get("/match/leavematch/:matchid",matchcontrollers.leavematch);
app.post("/user/existedid",usercontrollers.existedid);
app.get("/user/logout", usercontrollers.logout);

app.post("/user/existedid", usercontrollers.existedid)

db.sequelize.sync().then((req) => {
  app.listen(port, function (){
    console.log(`listen on ${port}`)  
  });
});
