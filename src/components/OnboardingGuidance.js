import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSpring, useTransition, animated, config} from 'react-spring';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = (props) => {
    
    const guides = [
        {id:1, text: 'Choose your Stage'},
        {id:2, text: 'Play around'},
        {id:3, text: 'Tap In'},
    ];

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
          if(index>2){
            console.log('dont do it')
          }
          else{
            setIndex(index + 1);
          }
          }, 1000);
    
        return () => clearInterval(interval);
      }, []);
      
      return (
          <p className="guide-button">
            {guides[index].text}
          </p>
                       
                       
                     
                    );
                };