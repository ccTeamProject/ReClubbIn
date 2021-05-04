import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/circle-pulse.json";
import "../OnBoardingPage.css"
import { OnboardingGuidance } from "./OnboardingGuidance";

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
        <div className="page-container">
          <div className="page-bloc">
          <Lottie options={defaultOptions} height={800} width={800} />
          </div>
          <div className="page-bloc">
          <h1>ReClubbIn</h1>
          </div>
          <div className="page-bloc">
          <OnboardingGuidance />
          </div>  
            

        </div>
    )
}

export default OnboardingPage