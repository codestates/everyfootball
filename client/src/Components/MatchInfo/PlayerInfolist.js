import React, { useState } from "react";
import axios from "axios";

export default function PlayerInfolist({ gender, position, penalty, goal, shoot, assist }) {
    const [resultlInfo, setResultInfo] = useState({
        goal: 0,
        assist: 0,
        shooting: 0,
        win: 0,
    });

    const sendResultInfo = async () => {
        const response = await axios.post(`http://localhost:4000/match/sendresult`, {
            matchid: "1",
            data: [{ userid: "1", ...resultlInfo }],
        });
    };

    return (
        <div>
            <div className="playerList">
                <div className="infoBox">
                    <div className="pInfo">{gender}</div>
                    <div className="pInfo">{position}</div>
                    <div className="pInfo">{penalty}</div>
                </div>
                {/* 관리자만 보이게 */}
                <div className="infoBox">
                    <input
                        className="pInfo"
                        onChange={(e) =>
                            setResultInfo((state) => {
                                return {
                                    ...state,
                                    // goal: Number(e.target.value),
                                    goal: e.target.value,
                                };
                            })
                        }
                    ></input>
                    <input
                        className="pInfo"
                        onChange={(e) =>
                            setResultInfo((state) => {
                                return {
                                    ...state,
                                    // assist: Number(e.target.value),
                                    assist: e.target.value,
                                };
                            })
                        }
                    ></input>
                    <input
                        className="pInfo"
                        onChange={(e) =>
                            setResultInfo((state) => {
                                return {
                                    ...state,
                                    // shooting: Number(e.target.value),
                                    shooting: Number(e.target.value),
                                };
                            })
                        }
                    ></input>
                    <input
                        className="pInfo"
                        onChange={(e) =>
                            setResultInfo((state) => {
                                return {
                                    ...state,
                                    win: Number(e.target.value),
                                };
                            })
                        }
                    ></input>
                    <button onClick={() => sendResultInfo()}>입력하기</button>
                </div>
            </div>
        </div>
    );
}
