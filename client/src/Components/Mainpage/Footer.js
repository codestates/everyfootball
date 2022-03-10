import react from "react";
import "./Footer.css";
import logo from "./logo.png";
const Footer = () => {
    return (
        <footer>
            <div id="menu">
                <div className="menu-left">
                    <div>
                        <span>에브리풋볼 소개</span>
                    </div>
                    <div>
                        <span>소셜매치</span>
                    </div>
                    <div>
                        <span>매니저 지원하기</span>
                    </div>
                    <div>
                        <span>경기 기록실</span>
                    </div>
                    <div>
                        <span>자주 묻는 질문</span>
                    </div>
                </div>
                <div className="menu-right">
                    <img src="https://pzfutball.com/public_images/sidebar/youtube.svg" />
                    <img src="https://pzfutball.com/public_images/sidebar/insta.svg" />
                    <img src="https://pzfutball.com/public_images/sidebar/openkakao.svg" />
                </div>
                <div className="menu-right"></div>
            </div>
            <div id="company">
                <div className="company-left">
                    <div>
                        <a>개인정보처리방침</a>
                        <a>이용약관</a>
                        <a>이메일무단수집거부</a>
                        <a>사이트맵</a>
                    </div>
                    <div id="companyinfo">
                        에브리풋볼 | 사업자번호 : 123-12-12345 | 대표자 : 최의림 | 서울시 용산구 한강대로 372 센트레빌
                        아스테리움
                        <br />
                        사업자번호 12-12345-1234 | Copyright @ 2017 EveryFootball Corporation, All rights reserved.
                    </div>
                </div>
                <div className="company-right">
                    <div></div>
                    <div>
                        <img src={logo} />
                    </div>
                    <div></div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
