import React, { useState } from "react";

import axios from "axios";

const UserinfoChange = () => {
    const [isedit, setIsedit] = useState({
        userid: "",
        fullname: "",
        position: "",
    });

    const handleInputValue = (key) => (e) => {
        setIsedit({ ...isedit, [key]: e.target.value.toLowerCase() });
    };

    const onClickLogin = () => {
        const { userid, fullname, position } = isedit;
        if (userid === "") {
            console.log("아이디를 입력하세요");
            return;
        } else if (fullname === "") {
            console.log("이름을 입력하세요");
            return;
        } else if (position === "") {
            console.log("포지션을 입력하세요");
            return;
        }
        console.log("click changeinfo");
        axios
            .post(
                "http://localhost:4000/user/changeinfo",
                {
                    userid,
                    fullname,
                    position,
                },
                { "Content-Type": "application/json", withCredentials: true },
            )
            .then((res) => {
                console.log(res);
                console.log("성공");
                console.log(res.data);
                if (res.status === 200) {
                    alert("수정 완료했습니다.");
                    return window.location.replace("/userinfo");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="wrap">
            <div className="login">
                <div className="login_id">
                    <h4>아이디</h4>
                    <input type="text" placeholder="아이디" name="input_id" onChange={handleInputValue("userid")} />
                </div>
                <div className="login_pw">
                    <h4>이름</h4>
                    <input
                        type="text"
                        name="input_Password"
                        placeholder="이름"
                        onChange={handleInputValue("fullname")}
                    />
                </div>
                <div className="login_pw">
                    <h4>포지션</h4>
                    <input
                        type="text"
                        name="input_Password"
                        placeholder="포지션"
                        onChange={handleInputValue("position")}
                    />
                </div>

                <div className="submit">
                    <button onClick={onClickLogin}>수정</button>
                </div>
            </div>
        </div>
    );
};

export default UserinfoChange;
