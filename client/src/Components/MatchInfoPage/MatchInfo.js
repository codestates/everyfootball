import React, { useState, useEffect } from "react";
import StadiumImage from "./StadiumImage";
import StadiumInfo from "./StadiumInfo";
import PlayerInfo from "./PlayerInfo";
import dummymatch from "./dummymatch";
import "./MatchInfo.css";

export default function MatchInfo() {
    const [matchInfoData, setMatchInfoData] = useState(dummymatch);
    const [isLoading, setIsLoading] = useState(true);
    function fetchMatchId() {
        fetch(`${process.env.REACT_APP_API_URL}/match/data/matchid?matchid=${localStorage.getItem("matchid")}`)
            .then((res) => res.json())
            .then((res) => {
                setMatchInfoData(res.data);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        setIsLoading(true);
        fetchMatchId();
    }, []);
    return (
        <div id="match-info-form">
            <StadiumImage groundinfo={matchInfoData.groundinfo} />
            <StadiumInfo groundinfo={matchInfoData.groundinfo} />
            {isLoading ? "" : <PlayerInfo usersinfo={matchInfoData.usersinfo} />}
        </div>
    );
}
