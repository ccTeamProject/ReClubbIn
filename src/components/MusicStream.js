import React, { useState, useEffect} from 'react';
import axios from 'axios';

const MusicStream = props => {

let genre = props.genre;

const newApiRoot ='https://dn1.monophonic.digital/v1/'

const [getStream, setGetStream] = React.useState([]);
let songIDs = getStream.map((song)=>song.id);
let randomSong = Math.floor(Math.random() * 99);;
let newAudioSource = `${newApiRoot}tracks/${songIDs[randomSong]}/stream`;


React.useEffect(()=>{

    axios
        .get(`${newApiRoot}tracks/trending?genre=${genre}`)
        .then((response)=>response.data)
        .then((data)=> setGetStream(data.data));
    
       


}, [genre]);


    return (
        <div>
            <audio controls autoPlay={true} loop src={newAudioSource} >
                <p>Your browser does not support the <code>audio</code> element.</p>            
            </audio>
            
        </div>
    )
}


export default MusicStream
