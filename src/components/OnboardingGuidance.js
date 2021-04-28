import React from 'react';
import {NavLink} from 'react-router-dom';

export const OnboardingGuidance = () => {

    const link = `/genres/`;

    return (
        <div>
            <NavLink to ={link}>Tap In</NavLink>
            
        </div>
    )
}
