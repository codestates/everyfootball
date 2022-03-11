import react from "react";
import "./Match.css";
import { Link } from "react-router-dom";
const Match = ({ matchData, postMatchInfo }) => {
    return (
        <div className="match-li">
            <a className="match-link">
                <div className="match-time">{matchData.time}</div>
                <div className="match-info">
                    <h3>{matchData.location}</h3>
                    <span>{matchData.matchgender} </span>
                    <span>{`${matchData.maxplayer / 2} vs ${matchData.maxplayer / 2}`} </span>
                </div>
                <Link
                    to="/matchinfo"
                    onClick={() => {
                        postMatchInfo(matchData.matchid);
                    }}
                >
                    <div
                        className={
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
            </a>
        </div>
    );
};

export default Match;
