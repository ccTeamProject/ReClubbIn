import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = () => {
    const guideIn = "guide-in";
    const guideOut = "guide-out";
    const guides = [
        {id:1, text: 'Choose your Stage', url:"/genres", fade:true},
        {id:2, text: 'Play around', url:"/genres", fade:true},
        {id:3, text: 'Tap In', url:"/genres", fade:true}
    ];

    const [index, setIndex] = useState(0);
    const [guideClass, setGuideClass] = useState(true);

        useEffect(() => {
          const interval = setInterval(() => {
            if(index<=1){
            setIndex(index + 1);}
          }, 6000);
          return()=> {
            clearInterval(interval);
         
          };
        })
      return(
        <div>
           {<NavLink to = {guides[index].url} className={guides[index].fade ? guideIn : guideOut }>{guides[index].text}</NavLink>}
        </div>   
      )
};