import React, { useState } from "react";

const VolumeControl = () => {
  // const [volume, setVolume] = useState(0.5);
  const volumes = ["a", "b", "c"];
  return (
    <div className="volume-control">
      {volumes.map((volume) => {
        console.log("I am mapping this", volume);
        return <button>{volume} </button>;
      })}
    </div>
  );
};

export default VolumeControl;
//1. First do a .map on 'volumes' line 8
//2. We want it with an explicit return in the callback fct.
//3. This fct. should return the JSX for button.
//4. But this JSX for button should carry the volume names inside.
