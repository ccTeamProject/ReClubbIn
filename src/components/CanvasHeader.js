import React, { useState } from "react";
import VisitorsCounter from "./VisitorsCounter";
import VolumeControl from "./VolumeControl";
import { NavLink } from "react-router-dom";

const CanvasHeader = ({ volumeState, handleEvent }) => {
  return (
    <div className="canvas-header">
      <VolumeControl volumeState={volumeState} handleEvent={handleEvent} />
      <button style={{ height: "40px" }}>
        <NavLink to="/genres">back to genre-selection</NavLink>
      </button>
      <VisitorsCounter />
    </div>
  );
};

export default CanvasHeader;
