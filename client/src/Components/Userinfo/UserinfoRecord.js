import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserinfoFormList.css";

function UserinfoRecord() {
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
        userinfoRecordHandler();
    }, []);

    return (
        <div id="userinfo-form">
            <div className="userinfo-contents">
                <div className="userinfo-category">내 기록</div>
                <div className="userinfo-table">
                    <div className="row-header">
                        <div className="col">총 경기</div>
                        <div className="col">총 득점</div>
                        <div className="col">총 어시스트</div>
                        <div className="col">패널티</div>
                    </div>
                    <div className="col"> {userinfo && userinfo.data.data.userInfo.totalMatch}</div>
                    <div className="col"> {userinfo && userinfo.data.data.userInfo.totalGoal}</div>
                    <div className="col"> {userinfo && userinfo.data.data.userInfo.totalAssist}</div>
                    <div className="col">{userinfo && userinfo.data.data.userInfo.penalty}</div>
                </div>
            </div>
        </div>
    );
}
export default UserinfoRecord;
