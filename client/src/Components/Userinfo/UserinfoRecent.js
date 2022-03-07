import React, { useState, useEffect } from "react";
import axios from "axios";

function UserinfoRecent() {
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
        userinfoRecentHandler();
    }, []);

    return (
        <div>
            <div className="text">
                <h4>최근 경기 기록</h4>
                <table className="userinfo">
                    <tbody>
                        <tr>
                            <td className="text">경기 날짜: {}</td>
                            <td className="text">스코어</td>
                            <td className="text">득점: {userinfo && userinfo.data.data.userInfo.totalGoal}</td>
                            <td className="text">어시스트</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserinfoRecent;
