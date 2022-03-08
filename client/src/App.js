import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Mainpage from "./Components/Mainpage/Mainpage";
import Signup from "./Components/Signup/Signup";
import RecordBoard from "./Components/RecordBoardPage/RecordBoard";
import MatchInfo from "./Components/MatchInfoPage/MatchInfo";
import Login from "./Pages/Login";
import Userinfo from "./Pages/Userinfo";
import Footer from "./Components/Mainpage/Footer";
import Header from "./Components/Mainpage/Header";
import Changeinfo from "./Pages/Changeinfo";
import FAQ from "./Components/Mainpage/FAQ";
import axios from "axios";

function App() {
    const [matchInfoData, setMatchInfoData] = useState({
        groundinfo: {
            groundpayload: {
                groundid: "",
                img: "",
                location: "",
                name: "",
                parking: "",
                shower: "",
                toilet: "",
            },
        },
        userinfo: {
            userinfo: [
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
                {
                    admin: false,
                    createdAt: "",
                    fullname: "",
                    gender: "",
                    password: "",
                    penalty: 0,
                    phonenum: "",
                    position: "",
                    preferredloca: null,
                    preferredtime: null,
                    totalAssist: 0,
                    totalGoal: 0,
                    totalPoint: 0,
                    totalShooting: 0,
                    totalWin: 0,
                    updatedAt: "",
                    userid: "",
                    winrate: "",
                },
            ],
        },
    });
    const postMatchInfo = (matchid) => {
        localStorage.setItem("matchid", matchid);
    };

    useEffect(() => {
        fetch(`http://localhost:4000/match/data/matchid?matchid=${localStorage.getItem("matchid")}`)
            .then((res) => res.json())
            .then((res) => {
                setMatchInfoData(res.data.data);
            });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Mainpage postMatchInfo={postMatchInfo} />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/recordboard">
                        <RecordBoard />
                    </Route>
                    <Route path="/faq">
                        <FAQ />
                    </Route>
                    <Route path="/matchinfo">
                        <MatchInfo matchInfoData={matchInfoData} />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/userinfo">
                        <Userinfo />
                    </Route>
                    <Route path="/changeinfo">
                        <Changeinfo />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
