import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Mainpage from "./Components/Mainpage/Mainpage";
import Signup from "./Components/Signup/Signup";
import RecordBoard from "./Components/RecordBoard/RecordBoard";
import MatchInfo from "./Components/MatchInfo/MatchInfo";
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
                    <Route path="/recordboard">
                        <RecordBoard />
                    </Route>
                    <Route path="/matchinfo">
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
