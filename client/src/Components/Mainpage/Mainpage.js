import { useEffect, useState } from "react";
import Match from "./Match";
import "./Mainpage.css";
import Slide from "./Slide";
const Mainpage = () => {
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
            <Slide />
            {matchDatas.map((el) => {
                return <Match matchData={el} key={el.matchid} />;
            })}
        </div>
    );
};
export default Mainpage;
