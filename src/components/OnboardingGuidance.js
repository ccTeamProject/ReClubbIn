import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSpring, useTransition, animated, config} from 'react-spring';
import "../OnBoardingGuidance.css"

export const OnboardingGuidance = (props) => {
    
    const [guides] = useState([
        {id:1, text: 'Choose your Stage'},
        {id:2, text: 'Play around'},
        {id:3, text: 'Tap In'},
    ])

    const [index, setIndex] = useState(0);

    const heightProps = useSpring({
        config: config.slow,
        from: { height: '0px' },
        to: { height: '700px' },
      });

      const opacityProps = useSpring({
        config: config.molasses,
        delay: 400,
        from: { opacity: 0 },
        to: { opacity: 1 },
      });

    const fadingTextPropsTransition = useTransition(guides[index], (guide) => guide.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 3000 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((state) => (state + 1) % guides.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
      
      return (
       
          <animated.div style={opacityProps}>
           {fadingTextPropsTransition.map(({ guide, props, key }) => (
                      <animated.div 
                      key={key} 
                      style={{ ...props, position: 'absolute' }}>
                        <p>
                          {guide.text}
                        </p>
                        </animated.div>))}
                        </animated.div>
                     
                    );
                };