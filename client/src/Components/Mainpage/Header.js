import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import axios from "axios";
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    // axios() 로그아웃 기능 구현

    return (
        <header>
            <div>
                <h1>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="everyfootball"
                            onClick={() => {
                                console.log(console.log(localStorage.getItem("accessToken")));
                            }}
                        />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                소셜매치
                            </Link>
                        </li>
                        <li>
                            <Link to="/recordboard" style={{ textDecoration: "none" }}>
                                기록실
                            </Link>
                        </li>
                        <li>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
                {localStorage.getItem("accessToken") ? (
                    <ul class="spot">
                        <li>
                            <a>강호중님</a>
                        </li>
                        <li>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                로그아웃
                            </Link>
                        </li>
                        <li>
                            <Link to="/userinfo" style={{ textDecoration: "none" }}>
                                마이페이지
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul class="spot">
                        <li>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                로그인
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" style={{ textDecoration: "none" }}>
                                회원가입
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;
