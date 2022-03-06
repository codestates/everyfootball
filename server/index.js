const express = require('express');
const cors = require("cors");
const app = express();
const usercontrollers = require("./controllers");
const matchcontrorlers = require("./controllers");
const port = 4000

const db = require('./models')

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
app.post("/match/data", matchcontrorlers.data);
app.get("/match/showmatchlist",matchcontrorlers.showmatchlist);
app.get("/match/record",matchcontrorlers.record);

app.post("/user/existedid", usercontrollers.existedid)

db.sequelize.sync().then((req) => {
  app.listen(port, function (){
    console.log(`listen on ${port}`)  
  });
});
