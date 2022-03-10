import react from "react";
import "./Slide.css";
const Slide = () => {
    return (
        <div className="slidebox">
            <input type="radio" name="slide" id="slide01" />
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <ul className="slidelist">
                <li className="slideitem">
                    <a>
                        <label htmlFor="slide03" className="prev"></label>
                        <img src="http://www.playdoci.com/images/service/service_img_futsal_pic1.jpg" />
                        <label htmlFor="slide02" className="next"></label>
                    </a>
                </li>
                <li className="slideitem">
                    <a>
                        <label htmlFor="slide01" className="prev"></label>
                        <img src="https://www.uncmc.or.kr/nam_images/facilities/c0202_02.jpg" />
                        <label htmlFor="slide03" className="next"></label>
                    </a>
                </li>
                <li className="slideitem">
                    <a>
                        <label htmlFor="slide02" className="prev"></label>
                        <img src="http://img.itravelgo.co.kr/data/service/8/phpFO2DPm.jpg" />
                        <label htmlFor="slide01" className="next"></label>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Slide;
