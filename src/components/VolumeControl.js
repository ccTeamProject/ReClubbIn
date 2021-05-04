import React, { useState, useEffect } from "react";

const VolumeControl = ({ volumeState, handleEvent }) => {
  console.log("im rendering volumeControl");

  console.log(volumeState);

  return (
    <div className="volume-control">
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volumeState}
        onChange={handleEvent}
      />
    </div>
  );
};

export default VolumeControl;
//1. First do a .map on 'volumes' line 8
//2. We want it with an explicit return in the callback fct.
//3. This fct. should return the JSX for button.
//4. But this JSX for button should carry the volume names inside.
