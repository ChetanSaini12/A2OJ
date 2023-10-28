import React from "react";

import Lottie from "lottie-react";
import LottieAnimation from "./HeroLottie.json";
import "./Loding.css";

function HeroLottie() {
    return <div className="custom-backdrop-loader">
        <Lottie animationData={LottieAnimation} className="rabbit-loader" />
    </div>
}
export default HeroLottie;