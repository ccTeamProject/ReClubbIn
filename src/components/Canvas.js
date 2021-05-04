import React, { useState } from "react";
import CanvasContent from "./CanvasContent";
import CanvasHeader from "./CanvasHeader";
import CanvasFooter from "./CanvasFooter";
import "./CanvasFooter.css";

const Canvas = (props) => {
  const params = props.match.params;

  //states for the substance buttons
  const [beer, setbeer] = useState(false);
  const [smiley, setsmiley] = useState(false);

  const haveBeer = () => {
    setbeer(true);
    setsmiley(false);
  };

  const haveSmiley = () => {
    setsmiley(true);
    setbeer(false);
  };

  const haveTea = () => {
    setbeer(false);
    setsmiley(false);
  };

  //state for volume-control
  const [volumeState, setVolumeState] = useState(0.5);
  const handleEvent = (event) => setVolumeState(event.target.valueAsNumber);

  return (
    <div id="CanvasContainer">
      <CanvasHeader volumeState={volumeState} handleEvent={handleEvent} />
      {beer && <div className="blurBG"></div>}
      {smiley && <div className="smileyBG"></div>}
      <CanvasContent genreSelection={params} volumeState={volumeState} />
      <CanvasFooter
        haveBeer={haveBeer}
        haveSmiley={haveSmiley}
        haveTea={haveTea}
      />
    </div>
  );
};

export default Canvas;
