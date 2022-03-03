import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <header>
            <div class="logo">
                <img src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png" />
            </div>
            <nav id="menu">
                {isLogin ? (
                    <ul id="top_menu">
                        <li>김지영(jykim)님</li>
                        <a href="#">로그아웃</a>
                        <a href="#">마이페이지</a>
                    </ul>
                ) : (
                    <ul id="top_menu">
                        <Link to="/login">로그인</Link>
                        <Link to="/signup">회원가입</Link>
                    </ul>
                )}

                <ul id="main_menu">
                    <a href="/">Home</a>
                    <Link to="userinfo">내 정보</Link>
                    <Link to="/recordboard">기록실</Link>
                    <a href="#">FAQ</a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
