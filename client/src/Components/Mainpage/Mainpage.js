import { useEffect, useState } from "react";
import Match from "./Match";
import "./Mainpage.css";
import Slide from "./Slide";

const Mainpage = ({ postMatchInfo }) => {
    const [matchDatas, setMatchDatas] = useState([]); // 매치목록 상태변수
    useEffect(() => {
        fetch("http://localhost:4000/match/showmatchlist")
            .then((res) => res.json())
            .then((res) => {
                setMatchDatas(res.matches);
            });
    }, []); // 매치목록 보여주는 api

    return (
        <div id="list-main">
            <Slide />
            {matchDatas.map((el) => {
                return <Match matchData={el} key={el.matchid} postMatchInfo={postMatchInfo} />;
            })}
        </div>
    );
};
export default Mainpage;
