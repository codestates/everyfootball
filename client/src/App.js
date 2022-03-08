import "./App.css";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Mainpage from "./Components/Mainpage/Mainpage";
import Signup from "./Components/Signup/Signup";
import RecordBoard from "./Components/RecordBoard/RecordBoard";
import MatchInfo from "./Components/MatchInfo/MatchInfo";
import Login from "./Pages/Login";
import Userinfo from "./Pages/Userinfo";
import Footer from "./Components/Mainpage/Footer";
import Header from "./Components/Mainpage/Header";
import Changeinfo from "./Pages/Changeinfo";
import FAQ from "./Components/Mainpage/FAQ";
import axios from "axios";

function App() {
    const [matchInfoData, setMatchInfoData] = useState({});
    const postMatchInfo = (matchid) => {
        axios.get(`http://localhost:4000/match/data/matchid?matchid=${matchid}`).then((res) => {
            setMatchInfoData(res.data.data);
        });
    };
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
