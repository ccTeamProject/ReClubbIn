import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = (props) => {
    
    const guides = [
        {id:1, text: 'Choose your Stage', url:"#"},
        {id:2, text: 'Play around', url:"#"},
        {id:3, text: 'Tap In', url:"/genres"}
    ];

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
          if(index<=1){
            setIndex(index + 1);          }
          else{
            clearInterval(interval);
          }
          }, 4000);
        }, [guides[2]]);

      return(
        <div>
           { index < 3 && <span ><NavLink to = "/genres" className="guide">{guides[index].text}</NavLink></span>}
           {/* { index > 2 && <span className="guide-button"> <NavLink to ="/genres">{guides[2].text}</NavLink></span>}  */}
        </div>   
      )
};