import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
    const [inputId, setInputId] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    };

    const onClickLogin = () => {
        // console.log("click login");
        // console.log("ID : ", inputId);
        // console.log("PW : ", inputPassword);
        axios
            .post("https://localhost:3000/user/login", {
                id: inputId,
                password: inputPassword,
            })
            .then((res) => {
                // console.log(res);
                const data = res.data;
                // console.log(data.data);
                // console.log("id: ", data.data.email);
                // console.log("password: ", data.data.userPassword);
                if (data.data.email === inputId) {
                    // console.log("======================", "로그인 성공");
                    localStorage.setItem("id", inputId);
                    // console.log(localStorage);
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                // document.location.href = '/'
                window.location.replace("/");
            })

            .catch((error) => {
                console.log(error.response);
                const status = error.response.status;
                console.log(status);
                alert("아이디와 비밀번호를 확인해 주세요.");
            });
    };

    return (
        <div className="wrap">
            <div className="login">
                <h2>로그인</h2>
                <hr />
                {/* <div class="login_sns">
            <li><Link to=""><i class="fab fa-kakaotalk"></i></Link></li>
						<li><Link to=""><i class="fab fa-kakaotalk"></i></Link></li>
            </div> */}

                <div className="login_id">
                    <h4>아이디</h4>
                    <input type="text" placeholder="아이디" name="input_id" value={inputId} onChange={handleInputId} />
                </div>
                <div className="login_pw">
                    <h4>비밀번호</h4>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        name="input_Password"
                        value={inputPassword}
                        onChange={handleInputPassword}
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
