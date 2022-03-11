import React, { useState } from "react";
import Boardlist from "./Boardlist";
import "./Board.css";

export default function Board({ topusers }) {
    const dummyData = topusers.slice();
    dummyData.sort((a, b) => b.totalPoint - a.totalPoint);
    return (
        <div>
            <div className="total-rank">
                <h2>에브리풋볼 순위</h2>
                <div className="table">
                    <div className="row-header">
                        <div className="col">순위</div>
                        <div className="col">선수</div>
                        <div className="col">득점</div>
                        <div className="col">도움</div>
                        <div className="col">포인트</div>
                        <div className="col">경기 수</div>
                    </div>
                    {dummyData.map((el, i) => {
                        return (
                            <Boardlist
                                key={i}
                                rank={i + 1}
                                name={el.fullname}
                                goal={el.totalGoal}
                                assist={el.totalAssist}
                                point={el.totalPoint}
                                totalmatch={el.totalMatch}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
