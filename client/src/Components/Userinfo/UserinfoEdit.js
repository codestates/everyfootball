import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserinfoFormList.css";
function UserinfoEdit() {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");

    const handleModal = () => {
        window.location.replace("/changeinfo");
    };
    const userinfoEditHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get("http://localhost:4000/user/userinfo", {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    setUserinfo(res);
                    console.log("개인정보수정 성공");
                })
                .catch((err) => {
                    console.log("개인정보수정 에러", err);
                });
        }
    };
    useEffect(() => {
        userinfoEditHandler();
    }, []);

    return (
        <div className="totalplayer">
            <div className="table">
                {/* <h4>개인정보</h4> */}
                <div className="row-header">
                    <div className="col">이름</div>
                    <div className="col">아이디</div>
                    <div className="col">포지션</div>
                    <div className="col">성별</div>
                    {/* <div className="col">선호 구장 위치</div>
                    <div className="col">선호 경기 시간</div> */}
                </div>
                <div className="col">{userinfo && userinfo.data.data.userInfo.fullname}</div>
                <div className="col">{userinfo && userinfo.data.data.userInfo.userid}</div>
                <div className="col">{userinfo && userinfo.data.data.userInfo.position}</div>
                <div className="col">{userinfo && userinfo.data.data.userInfo.gender}</div>
                {/* <div className="col">{userinfo && userinfo.data.datapreferLocation}</div>
                <div className="col">{userinfo && userinfo.data.preferTime}</div> */}
            </div>
        </div>
    );
}
export default UserinfoEdit;
