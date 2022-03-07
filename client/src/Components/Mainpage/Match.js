import react from "react";
import "./Match.css";
import { Link, useHistory } from "react-router-dom";

const Match = ({ date, location, gender, headCount }) => {
    const history = useHistory();

    const clickReserved = () => {
        history.push("/matchinfo", {state:{date}})
    }

    return (
        <div className="row">
            <div className="col">⏲️ {date}</div>
            <div className="col">🏟️ {location}</div>
            <div className="col">{gender}</div>
            <div className="col">{headCount}</div>
            <div className="col" onClick={clickReserved}>
                예약하기
            </div>
        </div>
    );
};

export default Match;
