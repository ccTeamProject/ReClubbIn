import React from 'react'

const Visuals = (props) => {
    const technoSrc = 'https://media.giphy.com/media/M9xtw95RB2ZMc/giphy.gif'
    const jazzSrc = 'https://media.giphy.com/media/l4FGxotcT8O9C0d0c/giphy.gif'
    const classicalSrc = 'https://media.giphy.com/media/3ohhwfdiNAavtCtrkA/giphy.gif'
    const alternativeSrc = 'https://media.giphy.com/media/lcyaEwgNvvoFzpnfDp/giphy.gif'
    const metalSrc = 'https://i.giphy.com/media/cQRPusQzy23OE/giphy.webp'
    

    const {genre} = props.genre;
    console.log(genre);

    let src = '';
    if (genre === 'Techno'){
        src = technoSrc;
    }
    if (genre === 'Jazz'){
        src = jazzSrc;
    }
    if (genre === 'Classical'){
        src = classicalSrc;
    }
    if (genre === 'Alternative'){
        src = alternativeSrc;
    }
    if (genre === 'Metal'){
        src = metalSrc;
    }

    return (
        <div className='genreGifs'>
            <img className="visual" src={src} alt={`visual for ${genre}`}></img>
        </div>
    )
}

export default Visuals
