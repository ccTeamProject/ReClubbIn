import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = () => {

    const guides = [
        {id:1, text: 'Choose your Stage', url:"/genres"},
        {id:2, text: 'Play around', url:"/genres"},
        {id:3, text: 'Tap In ->', url:"/genres"}
    ];

    const [index, setIndex] = useState(0);
   
      useEffect(() => {
          const interval = setInterval(() => {
            if(index<=1){
            setIndex(index + 1);}
          }, 3000);
          return()=> {
            clearInterval(interval);
         
          };
        })
      return(
        <div>
           {<NavLink to = {guides[index].url} className = "guide-in"  /* animation-name = "fadeIn" */>{guides[index].text}</NavLink>}
        </div>   
      )
};