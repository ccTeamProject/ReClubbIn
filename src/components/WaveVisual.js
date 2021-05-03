import React, {useState} from "react";
import Wave from "@foobar404/wave";

const WaveVisual = () => {

    let [wave, setWave] = useState(new Wave());
    const audio = document.getElementById("audio-element");
    let canvas = document.getElementById("canvas");
    let options = {type: "shine",
    colors: ["red", "white", "blue"]};
    wave.fromElement(audio, canvas, options);
    console.log(audio, canvas);
return(
    <div>
       
    </div>
);
}

export default WaveVisual