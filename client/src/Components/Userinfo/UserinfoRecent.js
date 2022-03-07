import React, { useState, useEffect } from "react";
import axios from "axios";

function UserinfoRecent({ name, date, myscore, score, goal, assist }) {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");
    console.log("token", accessToken);
    const userinfoRecentHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get("http://localhost:4000/user/userinfo", {
                    // headers:{localStorage.getItem("accessToken")}
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    setUserinfo(res);
                    console.log("최근경기기록 성공");
                })
                .catch((err) => {
                    console.log("최근경기기록 에러", err);
                });
        }
    };
    useEffect(() => {
        if (userinfo && userinfo.data.length > 0) {
            console.log(userinfo.data[0].name);
        }
        userinfoRecentHandler();
    }, []);

    return (
        <div>
            <div className="text">
                <h4>최근 10경기 기록</h4>
                <table className="userinfo">
                    <tbody>
                        <tr>
                            <td>경기 날짜</td>
                            <td>스코어</td>
                            <td>득점</td>
                            <td>어시스트</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className="userinfo">
                <tr>
                    <td>{userinfo && userinfo.data[0].name}</td>
                    <td>
                        {myscore} : {score}
                    </td>
                    <td>{userinfo && userinfo.data[0].username}</td>
                    <td>{assist}</td>
                </tr>
            </table>
        </div>
    );
}
export default UserinfoRecent;
