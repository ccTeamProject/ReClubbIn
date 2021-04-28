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
        <div>
          <h1>ReClubbIn</h1>
         
            <Lottie options={defaultOptions} height={800} width={800} />
            <OnboardingGuidance />
            
            

        </div>
    )
}

export default OnboardingPage