import React, { useState } from "react";
import VisitorsCounter from "./VisitorsCounter";
import VolumeControl from "./VolumeControl";
import { NavLink } from "react-router-dom";

const CanvasHeader = ({ volumeState, handleEvent }) => {
  return (
    <div className="canvas-header">
      <VolumeControl volumeState={volumeState} handleEvent={handleEvent} />
      <div >
        <NavLink style= {{color:"#FF0099", cursor:"pointer"}}to="/genres">go back</NavLink>
      </div>
      <VisitorsCounter />
    </div>
  );
};

export default CanvasHeader;
