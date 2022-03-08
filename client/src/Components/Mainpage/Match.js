import react from "react";
import "./Match.css";
import { Link } from "react-router-dom";
const Match = ({ matchData }) => {
    return (
        <div class="match-li">
            <a class="match-link">
                <div class="match-time">{matchData.time}</div>
                <div class="match-info">
                    <h3>{matchData.location}</h3>
                    <span>{matchData.matchgender} </span>
                    <span>6vs6 </span>
                    <span>모든레벨</span>
                </div>
                <Link to="matchinfo">
                    <div class="match-status">마감</div>
                </Link>
            </a>
        </div>
    );
};

export default Match;
