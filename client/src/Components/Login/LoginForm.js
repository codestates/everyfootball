import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({
        userid: "",
        password: "",
    });

    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    };

    const onClickLogin = () => {
        const { userid, password } = loginInfo;
        if (userid === "") {
            alert("아이디를 입력하세요");
            return;
        } else if (password === "") {
            alert("비밀번호를 입력하세요");
            return;
        }
          axios
            .post(
                `${process.env.REACT_APP_API_URL}/user/login`,
                {
                    userid,
                    password,
                },
                { "Content-Type": "application/json" },
            )
            .then((res) => {
                localStorage.setItem("accessToken", res.data.data.accessToken);
                localStorage.setItem("fullname", res.data.data.fullname);
                
                if (res.data.data.accessToken) {
                    localStorage.setItem("accessToken", res.data.data.accessToken);
                }
                
                return window.location.replace("/");
            })
            .catch((error) => {
                alert("아이디와 비밀번호를 확인해 주세요.");
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
                    <h4>비밀번호</h4>
                    <input
                        type="password"
                        name="input_Password"
                        placeholder="비밀번호"
                        onChange={handleInputValue("password")}
                    />
                </div>
                <div className="submit">
                    <button onClick={onClickLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
