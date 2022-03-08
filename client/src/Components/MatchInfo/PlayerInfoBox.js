import React, { useEffect, useState } from "react";
import PlayerInfolist from "./PlayerInfolist";
import axios from "axios";
const dummyData = [
    {
        gender: "남",
        level: "1",
        position: "FW",
        penalty: 0,
    },
    {
        gender: "남",
        level: "2",
        position: "DF",
        penalty: 1,
    },
    {
        gender: "남",
        level: "1",
        position: "FW",
        penalty: 3,
    },
    {
        gender: "여",
        level: "3",
        position: "FW",
        penalty: 1,
    },
    {
        gender: "남",
        level: "7",
        position: "DF",
        penalty: 6,
    },
    {
        gender: "남",
        level: "4",
        position: "DF",
        penalty: 2,
    },
];

export default function PlayerInfoBox({ matchid }) {
    const accessToken = localStorage.getItem("accessToken");
    // const [matchData, setMatchData] = useState(null);

    // const getMatchUserInfo = async (id) => {
    //     const response = await axios.get(`http://localhost:4000/match/showmatchlist`, {
    //         headers: { authorization: `Bearer ${accessToken}` },
    //     });
    //     console.log("response", response.data);

    //     const findMatchData = response.data.find((el) => {
    //         return el.matchid === id;
    //     });
    //     setMatchData(findMatchData);
    // };

    // useEffect(() => {
    //     getMatchUserInfo(matchid);
    // }, []);

    return (
        <div>
            <div>
                {dummyData.map((el, i) => {
                    //findMatchData.participans
                    return <PlayerInfolist key={i} gender={el.gender} position={el.position} penalty={el.penalty} />;
                })}
            </div>
        </div>
    );
}
