import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserinfoFormList.css";

function UserinfoRecord({ game, goal, assist, penalty }) {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");

    const userinfoRecordHandler = () => {
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
                    console.log(res.data.data.userInfo.totalMatch);
                    setUserinfo(res);
                    console.log("개인기록 성공");
                })
                .catch((err) => {
                    console.log("개인기록 에러", err);
                });
        }
    };
    useEffect(() => {
        // if (userinfo && userinfo.data.length > 0) {
        //     console.log(userinfo.data[0].name);
        // }
        userinfoRecordHandler();
    }, []);

    return (
        <div className="text">
            <h4>개인 기록</h4>

            <table className="userinfo">
                <tr>
                    <td>총 경기: {userinfo && userinfo.data.data.userInfo.totalMatch}</td>
                    <td>총 득점: {userinfo && userinfo.data.data.userInfo.totalGoal}</td>
                    <td>총 어시스트: {userinfo && userinfo.data.data.userInfo.totalAssist}</td>
                    <td>패널티: {userinfo && userinfo.data.data.userInfo.penalty}</td>
                </tr>
            </table>
        </div>
    );
}
export default UserinfoRecord;
