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
        <div style={{ zIndex:"-999" }}>
          <Lottie options={defaultOptions} style={{height:"80vh", width:"60vw", display:"flex", flexWrap:"wrap", zIndex:"-999"  }} />
          <h1>ReClubbIn</h1>
          <div className="page-bloc">
          <OnboardingGuidance />
          </div>
        </div>
    )
}

export default OnboardingPage