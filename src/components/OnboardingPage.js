import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/circle-pulse.json";
import "../OnBoardingPage.css"

const OnboardingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
          
            <Lottie options={defaultOptions} height={800} width={800} />
            <h1>ReClubbIn</h1>

        </div>
    )
}

export default OnboardingPage