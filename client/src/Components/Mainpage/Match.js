import react from "react";
import "./Match.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Match = ({ matchData }) => {
    const history = useHistory();
    return (
        <div class="match-li">
            <a class="match-link">
                <div class="match-time">{matchData.time}</div>
                <div class="match-info">
                    <h3>{matchData.location}</h3>
                    <span>{matchData.matchgender}</span>
                    <span>6vs6 </span>
                    <span>모든레벨</span>
                </div>
                <div class="match-status" onClick={() => history.push('/matchinfo', {state : matchData})}>마감</div> 
            </a>
        </div>
    );
};

export default Match;
