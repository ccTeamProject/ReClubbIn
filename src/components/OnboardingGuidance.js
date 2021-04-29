import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = () => {

   /*  const link = `/genres/`; */
   const [guide1, setGuide1] =useState();

    return (
        <div className="guide-1">
           {/*  <NavLink to ={link}>Tap In</NavLink> */}
        </div>
    )
}
