import React from 'react'

const Visuals = (props) => {
    const technoSrc = 'https://media.giphy.com/media/l2R07i36Po6ZbnWtW/source.gif'
    const jazzSrc = 'https://media.giphy.com/media/h8IWVjMG4XvyQCQot3/source.gif'
    const classicalSrc = 'https://media.giphy.com/media/3ohhwfdiNAavtCtrkA/giphy.gif'
    const alternativeSrc = 'https://media.giphy.com/media/3o7WTQcjUp6JnP7s52/source.gif'
    const metalSrc = 'https://media.giphy.com/media/3o7WTB4o4D0O9IQVQ4/source.gif'
    const punkSrc ='https://media.giphy.com/media/CMI7G8hvEvS9i/source.gif'
    const reggaeSrc = 'https://media.giphy.com/media/3osxYcfd0CzzIVQJYk/source.gif'
    

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
    if (genre === 'Ambient'){
        src = alternativeSrc;
    }
    if (genre === 'Metal'){
        src = metalSrc;
    }
    if (genre === 'Punk'){
        src = punkSrc;
    }
    if (genre === 'Reggae'){
        src = reggaeSrc;
    }

    return (
        <div className='genreGifs'>
            <img className="visual" src={src} alt={`visual for ${genre}`}></img>
        </div>
    )
}

export default Visuals
