import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StadiumImage({ matchId }) {
    const [groundData, setGroundData] = useState(null);

    //axios 랑 이 방법의 차이
    const getGroundData = async (id) => {
        const response = await axios.get(`http://localhost:4000/match/data/${id}?matchid=${id}`);
        //console.log(response.data)
        setGroundData(response.data.data.groundinfo);
    };
    //랜더링 될때 한번만 실행
    useEffect(() => {
        console.log("matchId", matchId);
        getGroundData(matchId);
    }, []);

    const imagestyle = {
        height: "60vh",
        width: "80vw",
    };

    if (groundData === null) {
        return <>로딩중</>;
    }

    return (
        <div>
            <div className="stadiumImage">
                <img src={groundData.groundpayload.img} style={imagestyle} alt="futsal"></img>
            </div>
        </div>
    );
}
