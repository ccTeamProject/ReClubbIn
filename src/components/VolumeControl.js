import React, { useState, useEffect } from "react";

const VolumeControl = () => {
  console.log("im rendering volumeControl");
  // const [volumeState, setVolumeState] = useState("");
  const handleEvent = () => {
    console.log("hello");
    // return setVolumeState("hello");
  };
  // useEffect(() => {
  //   handleEvent();
  // }, []);

  const volumes = ["mute", "medium", "loud"];
  return (
    <div className="volume-control">
      <button
        onClick={(e) => {
          debugger;
          console.log("click");
        }}
      >
        test
      </button>
      {volumes.map((volume, index) => {
        console.log("I am mapping this");
        return (
          <button
            key={volume}
            onClick={(e) => {
              debugger;
              console.log("click");
            }}
          >
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
