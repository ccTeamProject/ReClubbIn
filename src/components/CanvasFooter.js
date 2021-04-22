import React from "react";
import BeerButton from "./BeerButton";
import TeaButton from "./TeaButton";
import SmileyButton from "./SmileyButton";
import { useState } from "react";

const CanvasFooter = () => {
  const [beer, setbeer] = useState(false);
  const [smiley, setsmiley] = useState(false);


  const haveBeer = () => {
    setbeer(true);
  };

  const haveTea = () => {
    setbeer(false);
    setsmiley(false)
  };

  const haveSmiley = () => {
    setsmiley(true);
  };

  return (
    <div className="canvas-footer">
      <div>{beer ? "True" : "False"}</div>
      <div>{smiley ? "True" : "False"}</div>
         <BeerButton beerButton="Beer" haveBeer={haveBeer} />
        <SmileyButton smileyName="Smiley" haveSmiley={haveSmiley} />
        <TeaButton teaName="Tea" haveTea={haveTea} />
      </div>
  );
};

export default CanvasFooter;
