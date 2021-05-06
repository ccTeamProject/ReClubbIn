import React, {useState, useEffect} from "react";
import Wave from "@foobar404/wave";

const WaveVisual = ({audioRef, canvasRef}) => {

    

    const createVisualization= () => {
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let audio = audioRef.current;
        audio.crossOrigin = "anonymous";
        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);
        
        function renderFrame(){
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            /* console.log(freqData) */
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
                my_gradient.addColorStop(0, "#00bc6b");
                my_gradient.addColorStop(0.2, "#00bc6b"); 
                my_gradient.addColorStop(1, "mediumvioletred");        
                ctx.fillStyle = my_gradient;
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 2);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        };
        renderFrame();
    }

    useEffect(() => {
        // Logs `canvas and audio DOM-elements` 
        console.log(canvasRef.current);
        console.log(audioRef.current);
        createVisualization();

    }, []);

    return null;
}

export default WaveVisual