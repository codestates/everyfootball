import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Mainpage from "./Components/Mainpage/Mainpage";
import Signup from "./Components/Signup";
import RecordBoard from "./Components/RecordBoardPage/RecordBoard";
import MatchInfo from "./Components/MatchInfoPage/MatchInfo";
import Login from "../src/Pages/Login";
import Userinfo from "./Pages/Userinfo";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Mainpage />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/recordBoard">
                        <RecordBoard />
                    </Route>
                    <Route path="/matchInfo">
                        <MatchInfo />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/userinfo">
                        <Userinfo />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
