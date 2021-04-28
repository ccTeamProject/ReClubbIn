import React from "react";
import BeerButton from "./BeerButton";
import TeaButton from "./TeaButton";
import SmileyButton from "./SmileyButton";
import { useState } from "react";
import "./CanvasFooter.css"

const CanvasFooter = ({haveBeer, haveSmiley, haveTea}) => {


  return (
    <div className="canvas-footer">
      {/* <div style={{ color: "white" }}>{beer ? "Beer True" : "Beer False"}</div>
      <div style={{ color: "white" }}>
        {smiley ? "Smiley True" : "Smiley False"}
      </div> */}
      <BeerButton beerButton="Beer" haveBeer={haveBeer} />
      <SmileyButton smileyButton="Smiley" haveSmiley={haveSmiley} />
      <TeaButton teaButton="Tea" haveTea={haveTea} />
      
    </div>
  );
};

export default CanvasFooter;
