import react from "react";
import "./Slide.css";
const Slide = () => {
    return (
        <div class="slidebox">
            <input type="radio" name="slide" id="slide01" checked />
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <ul class="slidelist">
                <li class="slideitem">
                    <a>
                        <label for="slide03" class="prev"></label>
                        <img src="http://www.playdoci.com/images/service/service_img_futsal_pic1.jpg" />
                        <label for="slide02" class="next"></label>
                    </a>
                </li>
                <li class="slideitem">
                    <a>
                        <label for="slide01" class="prev"></label>
                        <img src="https://www.uncmc.or.kr/nam_images/facilities/c0202_02.jpg" />
                        <label for="slide03" class="next"></label>
                    </a>
                </li>
                <li class="slideitem">
                    <a>
                        <label for="slide02" class="prev"></label>
                        <img src="http://img.itravelgo.co.kr/data/service/8/phpFO2DPm.jpg" />
                        <label for="slide01" class="next"></label>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Slide;
