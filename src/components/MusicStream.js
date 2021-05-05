import React, { useState, useEffect } from "react";
import axios from "axios";
import "../MusicStream.css";

const MusicStream = (props) => {
  const { genre } = props.genre;

  const newApiRoot = "https://discoveryprovider.audius.co/v1/";

  const audioElement = props.audioRef.current;

  const [randomSong, setRandomSong] = useState("");
  useEffect(() => {
    setRandomSong(Math.floor(Math.random() * 99));
  }, []);

  const newSong = () => setRandomSong(Math.floor(Math.random() * 99));

  const [getStream, setGetStream] = useState([]);
  const songIDs = getStream.map((song) => song.id);
  let newAudioSource = "";

  const [apiLoaded, setApiLoaded] = useState(false)
  if (apiLoaded) {
    newAudioSource = `${newApiRoot}tracks/${songIDs[randomSong]}/stream`;
    audioElement.volume = props.volumeState;
  }

  useEffect(() => {
    axios
      .get(`${newApiRoot}tracks/trending?genre=${genre}`)
      .then((response) => response.data)
      .then((data) => {
        setGetStream(data.data);
        setApiLoaded(true)})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <audio
        ref={props.audioRef}
        id="audio-element"
        className="audio-player"
        crossOrigin="anonymous"
        autoPlay={true}
        onEnded={newSong}
        src={newAudioSource}
      >
        <p>
          Your browser does not support the <code>audio</code> element.
        </p>
      </audio>
    </div>
  );
};

export default MusicStream;
