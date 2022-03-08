import { useEffect, useState } from "react";
import Match from "./Match";
import "./Mainpage.css";

const Mainpage = ({ postMatchInfo }) => {
    const [matchDatas, setMatchDatas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/match/showmatchlist")
            .then((res) => res.json())
            .then((res) => {
                setMatchDatas(res.matches);
            });
    }, []);
    return (
        <div id="list-main">
            {matchDatas.map((el) => {
                return <Match matchData={el} key={el.matchid} postMatchInfo={postMatchInfo} />;
            })}
        </div>
    );
};
export default Mainpage;
