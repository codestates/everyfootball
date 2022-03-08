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
            console.log("아이디를 입력하세요");
            return;
        } else if (password === "") {
            console.log("비밀번호를 입력하세요");
            return;
        }
        console.log("click login");
        axios
            .post(
                "http://localhost:4000/user/login",
                {
                    userid,
                    password,
                },
                { "Content-Type": "application/json", withCredentials: true },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data.data.accessToken);
                localStorage.setItem("accessToken", res.data.data.accessToken);
                localStorage.setItem("fullname", res.data.data.fullname);
                console.log("성공");
                if (res.data.data.accessToken) {
                    localStorage.setItem("accessToken", res.data.data.accessToken);
                    console.log("======================", "로그인 성공");
                    console.log(localStorage);
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                // document.location.href = "/";
                return window.location.replace("/");
            })
            .catch((error) => {
                console.log(error);
                alert("아이디와 비밀번호를 확인해 주세요.");
            });
    };
    return (
        <div className="wrap">
            <div className="login">
                {/* <div class="login_sns">
<li><Link to=""><i class="fab fa-kakaotalk"></i></Link></li>
<li><Link to=""><i class="fab fa-kakaotalk"></i></Link></li>
</div> */}
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
