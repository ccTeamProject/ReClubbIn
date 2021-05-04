import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = (props) => {
    
    const guides = [
        {id:1, text: 'Choose your Stage'},
        {id:2, text: 'Play around'},
        {id:3, text: 'Tap In'}
    ];

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
          if(index<=2){
            setIndex(index + 1);          }
          else{
            clearInterval(interval);
          }
          }, 4000);
    
       

      }, []);

      return(
        <div>
           { index < 3 && <span className="guide-button">{guides[index].text}</span>}
           { index > 2 && <span className="guide-button"> <NavLink to ="/genres">{guides[2].text}</NavLink></span>}
        </div>   
      )
};