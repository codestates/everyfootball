import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <header id="header">
            <div>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="everyfootball" />
                    </Link>
                </h1>
                <h2 class="hide">대메뉴</h2>
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
            </div>
        </header>
    );
};

export default Header;
