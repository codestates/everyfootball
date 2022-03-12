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
    const postMatchInfo = (matchid) => {
        localStorage.setItem("matchid", matchid);
    };
//http://ec2-54-198-156-106.compute-1.amazonaws.com:4000
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
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/userinfo">
                        <Userinfo />
                    </Route>
                    <Route path="/changeinfo">
                        <Changeinfo />
                    </Route>
                    <Route path="/matchinfo">
                        <MatchInfo />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
