import React from "react";

function BeerButton({ beerButton, haveBeer }) {
  return (
    <img
      style={{ width: "50px", backgroundColor: "" }}
      alt=""
      src="https://upload.wikimedia.org/wikipedia/commons/7/76/577-beer-mug.svg"
      className="beer-button"
      onClick={haveBeer}
    />
    /* {beerButton==="Beer" ? <img style={{width:"50px",backgroundColor:'transparent'}} alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button> */
  );
}

export default BeerButton;
