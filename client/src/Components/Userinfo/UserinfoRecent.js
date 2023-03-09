import React, { useState, useEffect } from "react";
import axios from "axios";
import UserinfoRecentList from "./UserinfoRecentList";
import UserDelete from "./UserDelete";
import "./UserinfoFormList.css";

function UserinfoRecent() {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState([]);

    const userinfoRecentHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get(`${process.env.REACT_APP_API_URL}/user/userinfo`, {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    setUserinfo(res.data.last10match);
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
        <div id="userinfo-form">
            <div className="userinfo-contents">
                <div className="userinfo-category">최근 경기 기록</div>
                <div className="userinfo-table">
                    <div className="row-header">
                        <div className="col">경기 날짜</div>
                        <div className="col">스코어</div>
                        <div className="col">득점</div>
                        <div className="col">도움</div>
                    </div>
                    {userinfo &&
                        userinfo.map((el, i) => {
                            return (
                                <UserinfoRecentList
                                    time={el.time}
                                    score={el.score}
                                    goal={el.goal}
                                    assist={el.assist}
                                    win={el.win}
                                    key={i}
                                />
                            );
                        })}
                </div>
                <UserDelete />
            </div>
        </div>
    );
}
export default UserinfoRecent;
