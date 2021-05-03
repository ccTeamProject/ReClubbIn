import React, { useState, useEffect } from "react";

const VolumeControl = () => {
  console.log("im rendering volumeControl");
  const [volumeState, setVolumeState] = useState("");
  console.log(volumeState);

  const handleEvent = (event) => {
    if (event.target.value == "mute") {
      return setVolumeState(0);
    }
    if (event.target.value == "medium") {
      return setVolumeState(0.5);
    }

    if (event.target.value == "loud") {
      return setVolumeState(1.0);
    }
    return setVolumeState("hello");
  };
  // useEffect(() => {
  //   handleEvent();
  // }, []);

  const volumes = ["mute", "medium", "loud"];
  return (
    <div className="volume-control">
      {volumes.map((volume, index) => {
        console.log("I am mapping this");
        return (
          <button value={volume} key={volume} onClick={handleEvent}>
            {volume}
          </button>
        );
      })}
    </div>
  );
};

export default VolumeControl;
//1. First do a .map on 'volumes' line 8
//2. We want it with an explicit return in the callback fct.
//3. This fct. should return the JSX for button.
//4. But this JSX for button should carry the volume names inside.
