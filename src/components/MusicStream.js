import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../MusicStream.css";

const MusicStream = (props) => {

const {genre}= props.genre;

const newApiRoot ='https://discoveryprovider.audius.co/v1/'

const [randomSong, setRandomSong] = useState('');
useEffect(() => {
    setRandomSong(Math.floor(Math.random() * 99));
    return () => {
    }
}, [])

const [getStream, setGetStream] = useState([]);
let songIDs = getStream.map((song)=>song.id);
let newAudioSource = `${newApiRoot}tracks/${songIDs[randomSong]}/stream`;


useEffect(()=>{

    axios
        .get(`${newApiRoot}tracks/trending?genre=${genre}`)
        .then((response)=>response.data)
        .then((data)=> setGetStream(data.data));
    
       


}, []);


    return (
        <div>
            <audio ref={props.audioRef} id="audio-element" className="audio-player" autoPlay={true} loop src={newAudioSource} >
                <p>Your browser does not support the <code>audio</code> element.</p>            
            </audio>
            
        </div>
    )
}


export default MusicStream
