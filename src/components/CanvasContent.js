import React, { useState, useEffect, useRef } from "react";
import MusicStream from "./MusicStream";
import Visuals from "./Visuals";
import WaveVisual from "./WaveVisual";
import Wave from "@foobar404/wave";

function CanvasContent({ genreSelection, volumeState }) {
  const canvasRef = useRef();
  const audioRef = useRef();

  return (
    <div className="canvas-content">
      <MusicStream
        genre={genreSelection}
        audioRef={audioRef}
        volumeState={volumeState}
      />
      <Visuals genre={genreSelection} />

      <canvas id="canvas" ref={canvasRef}></canvas>
      <WaveVisual audioRef={audioRef} canvasRef={canvasRef} />
    </div>
  );
}

export default CanvasContent;
