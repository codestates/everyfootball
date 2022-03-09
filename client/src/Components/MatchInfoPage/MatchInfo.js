import React, { useState, useEffect } from "react";
import StadiumImage from "./StadiumImage";
import StadiumInfo from "./StadiumInfo";
import PlayerInfo from "./PlayerInfo";
import dummymatch from "./dummymatch";
import "./MatchInfo.css";

export default function MatchInfo() {
    const [matchInfoData, setMatchInfoData] = useState(dummymatch);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:4000/match/data/matchid?matchid=${localStorage.getItem("matchid")}`)
            .then((res) => res.json())
            .then((res) => {
                setMatchInfoData(res.data);
                setIsLoading(false);
            });
    }, []);
    return (
        <div>
            <StadiumImage groundinfo={matchInfoData.groundinfo} />
            <StadiumInfo groundinfo={matchInfoData.groundinfo} />
            <PlayerInfo usersinfo={matchInfoData.usersinfo} />
        </div>
    );
}
