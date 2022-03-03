import React from "react";
import UserinfoRecent from "./UserinfoRecent";
import "./UserinfoFormList.css";

function UserinfoRecentList() {
    const dummyData = [
        {
            date: 2.28,
            myscore: 9,
            score: 5,
            goal: 4,
            assist: 1,
        },
        {
            date: 2.27,
            myscore: 8,
            score: 3,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.26,
            myscore: 5,
            score: 3,
            goal: 3,
            assist: 2,
        },
        {
            date: 2.25,
            myscore: 5,
            score: 4,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.24,
            myscore: 7,
            score: 3,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.23,
            myscore: 8,
            score: 3,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.22,
            myscore: 7,
            score: 3,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.21,
            myscore: 5,
            score: 3,
            goal: 3,
            assist: 2,
        },
        {
            date: 2.2,
            myscore: 5,
            score: 3,
            goal: 1,
            assist: 1,
        },
        {
            date: 2.19,
            myscore: 6,
            score: 3,
            goal: 3,
            assist: 1,
        },
        {
            date: 2.18,
            myscore: 5,
            score: 3,
            goal: 3,
            assist: 1,
        },
    ];
    return (
        <div id="UserinfoRecentList">
            <div>
                <h4>개인기록</h4>
                <table className="userinfo">
                    <tr>
                        <td>경기 날짜</td>
                        <td>스코어</td>
                        <td>득점</td>
                        <td>어시스트</td>
                    </tr>
                </table>

                {dummyData.map((recent, i) => {
                    return (
                        <UserinfoRecent
                            key={i}
                            date={recent.date}
                            myscore={recent.myscore}
                            score={recent.score}
                            goal={recent.goal}
                            assist={recent.assist}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserinfoRecentList;
