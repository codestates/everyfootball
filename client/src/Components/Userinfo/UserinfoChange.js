import React, { useState } from "react";

import axios from "axios";

const UserinfoChange = () => {
    const [isedit, setIsedit] = useState({
        userid: "",
        fullname: "",
        position: "",
    });

    const handleInputValue = (key) => (e) => {
        setIsedit({ ...isedit, [key]: e.target.value });
    };

    const onClickchange = () => {
        const { userid, fullname, position } = isedit;
        if (userid === "") {
            alert("아이디를 입력하세요");
            return;
        } else if (fullname === "") {
            alert("이름을 입력하세요");
            return;
        } else if (position === "") {
            alert("포지션을 입력하세요");
            return;
        }
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/user/changeinfo`,
                {
                    userid,
                    fullname,
                    position,
                },
                { "Content-Type": "application/json", withCredentials: true },
            )
            .then((res) => {
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
                    <h4>아이디 체크</h4>
                    <input
                        type="text"
                        placeholder="본인 아이디를 입력해주세요."
                        name="input_id"
                        onChange={handleInputValue("userid")}
                    />
                </div>
                <div className="login_pw">
                    <h4>이름 수정하기</h4>
                    <input
                        type="text"
                        name="input_Name"
                        placeholder="수정하실 이름을 입력해주세요."
                        onChange={handleInputValue("fullname")}
                    />
                </div>
                <div className="login_pw">
                    <h4>포지션 수정하기</h4>
                    <input
                        type="text"
                        name="input_Position"
                        placeholder="수정하실 포지션을 입력해주세요."
                        onChange={handleInputValue("position")}
                    />
                </div>

                <div className="submit">
                    <button onClick={onClickchange}>수정하기</button>
                </div>
            </div>
        </div>
    );
};

export default UserinfoChange;
