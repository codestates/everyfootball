import "./App.css";
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

function App() {
    return (
        <BrowserRouter>
            <Header />
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
