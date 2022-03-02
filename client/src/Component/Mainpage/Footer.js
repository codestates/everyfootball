import react from 'react'
import './Footer.css'
const Footer = () => {
    return (
       <footer>
           <div class="box">
               <div class="items">
                   <h3 class="sitemap_category">매치</h3>
                   <ul>
                       <li>모든 매치</li>
                       <li>여성 매치</li>
                       <li>혼성 매치</li>
                       <li>남성 매치</li>
                   </ul>
               </div> {/* items */}
               <div class="items">
                   <h3 class="sitemap_category">서비스 지역</h3>
                   <ul>
                       <li>서울</li>
                       <li>경기/강원</li>
                       <li>인천</li>
                       <li>대전/세종/충청</li>
                       <li>대구/경북</li>
                       <li>부산/울산/경남</li>
                       <li>광주/전라</li>
                       <li>제주</li>
                   </ul>
               </div> {/* items */}
               <div class="items">
                   <h3 class="sitemap_category">에브리데이풋볼</h3>
                   <ul>
                       <li>에브리데이풋볼 소개</li>
                       <li>매니저 지원</li>
                       <li>채용</li>
                       <li>공지사항</li>
                       <li>자주 묻는 질문</li>
                       <li>1:1 문의</li>
                   </ul>
               </div> {/* items */}
               <div class="items">
                   <h3 class="sitemap_category">소셜 미디어</h3>
                   <ul>
                       <li>인스타그램</li>
                       <li>페이스북</li>
                       <li>페이스북 그룹</li>
                   </ul>
               </div> {/* items */}
               <div class="items_companyinfo">
                 <h3 class="sitemap_site">everydayfootball.com</h3>
                 <li>축구하고 싶을땐 에브리데이풋볼</li>
                 <br/>
                   <span>
                    <a href="#">이용 약관 | </a>
                    <a href="#">개인정보 처리방침 | </a>
                    <a href="#">사업자 정보 확인</a>
                   </span>
                 <br/>
                   <span>에브리데이풋볼 | 서울특별시 마포구 잔다리로31 제우피스빌딩 2층 | contact@plabfootball.com | 02-123-1234</span>
                   <br/>
                   <span>주식회사 에브리데이풋볼 | 사업자번호 123-12-12345 | 대표 최의림 | 통신판매업
                     <br/>
                      신고 2022-서울마포-1234
                   </span>
                   <br/>
                 <span class="copyright">
                 Copyright <b>EVERYDAYFOOTBALL</b> ALL rights reserved
                 </span>
               </div> {/* items */}
           </div> {/* box */}
       </footer>
    )
}
export default Footer;