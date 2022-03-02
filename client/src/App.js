import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage/Mainpage'
import Signup from './Component/Signup'
import RecordBoard from './Component/RecordBoardPage/RecordBoard'
import MatchInfo from './Component/MatchUI/MatchInfo';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Mainpage/></Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/recordBoard"><RecordBoard /></Route>
          <Route path="/matchUI"><MatchInfo /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
