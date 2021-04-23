import React from 'react'

const Visuals = ({genre}) => {
    const technoSrc = 'https://media.giphy.com/media/M9xtw95RB2ZMc/giphy.gif'
    const jazzSrc = 'https://media.giphy.com/media/l4FGxotcT8O9C0d0c/giphy.gif'
    const classicalSrc = 'https://media.giphy.com/media/3ohhwfdiNAavtCtrkA/giphy.gif'

    let src = '';
    if (genre == 'Techno'){
        src = technoSrc;
    }
    if (genre == 'Jazz'){
        src = jazzSrc;
    }
    if (genre == 'Classical'){
        src = classicalSrc;
    }

    return (
        <div>
            <img className="visual" src={src} alt='visual for {genre}'></img>
        </div>
    )
}

export default Visuals
