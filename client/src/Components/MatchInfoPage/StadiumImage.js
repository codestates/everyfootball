import React, { useState } from "react";
import image from "./futsal.jpg";
import "./StadiumImage.css";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function StadiumImage({ groundinfo }) {
    console.log(groundinfo);

    return (
        <div>
            <div className="stadium">
                <div className="info1">
                    <img id="stadium-img" src={groundinfo.groundpayload.img} alt="futsal"></img>
                </div>
            </div>
        </div>
    );
}
