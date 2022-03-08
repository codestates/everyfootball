import react from "react";
import "./Match.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Match = ({ matchData, postMatchInfo }) => {
    const history = useHistory();
    return (
        <div class="match-li">
            <a class="match-link">
                <div class="match-time">{matchData.time}</div>
                <div class="match-info">
                    <h3>{matchData.location}</h3>
                    <span>{matchData.matchgender} </span>
                    <span>{`${matchData.maxplayer / 2}vs${matchData.maxplayer / 2}`} </span>
                </div>
                <Link to="matchinfo" onClick={() => postMatchInfo(matchData.matchid)}>
                    <div
                        class={
                            Number(matchData.maxplayer) - Number(matchData.nowplayer) === 0
                                ? "match-status closed"
                                : "match-status"
                        }
                    >
                        {Number(matchData.maxplayer) - Number(matchData.nowplayer) === 0
                            ? "마감"
                            : `${Number(matchData.maxplayer) - Number(matchData.nowplayer)} 명 남음`}
                    </div>
                </Link>
                <span>{matchData.matchgender}</span>
                <span>6vs6 </span>
                <span>모든레벨</span>
                <div class="match-status" onClick={() => history.push("/matchinfo", { state: matchData })}>
                    마감
                </div>
            </a>
        </div>
    );
};

export default Match;
