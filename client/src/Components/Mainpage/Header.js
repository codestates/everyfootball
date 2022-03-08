import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import axios from "axios";
const Header = () => {
    // axios() 로그아웃 기능 구현
    const isLogOut = () => {
        axios
            .get("http://localhost:4000/user/logout", { withCredentials: true })
            .then((res) => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("fullname");
                window.location.replace("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <header>
            <div>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="everyfootball" />
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
                            <Link to="/faq" style={{ textDecoration: "none" }}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
                {localStorage.getItem("accessToken") ? (
                    <ul class="spot">
                        <li>
                            <a>{localStorage.getItem("fullname")} 님</a>
                        </li>
                        <li>
                            <Link to="/" style={{ textDecoration: "none" }} onClick={isLogOut}>
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
