import React from 'react';
import {NavLink} from 'react-router-dom';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = () => {

    const link = `/genres/`;

    return (
        <div className="guide-button">
            <NavLink to ={link}>Tap In</NavLink>
        </div>
    )
}
