import React, { useState, useEffect } from "react";
import axios from "axios";
import UserinfoRecentList from "./UserinfoRecentList";
import UserDelete from "./UserDelete";
function UserinfoRecent() {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState([]);
    console.log("token", accessToken);

    const handleModal = () => {
        window.location.replace("/changeinfo");
    };

    const userinfoRecentHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get("http://localhost:4000/user/userinfo", {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    // console.log(res);
                    console.log(res.data.last10match);
                    // console.log(res.data.last10match[0].time);
                    setUserinfo(res.data.last10match);
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
            <div>
                {/* 최근 10경기 기록 */}
                <div className="table">
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
                <div className="submit">
                    <button onClick={handleModal}>개인 정보 수정</button>
                    <UserDelete />
                </div>
            </div>
        </div>
    );
}
export default UserinfoRecent;
