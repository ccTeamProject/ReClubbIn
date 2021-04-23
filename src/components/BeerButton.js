import React from "react";

function BeerButton({ beerButton, haveBeer }) {
  return (
    <img
      style={{ width: "50px", backgroundColor: "" }}
      alt=""
      src="https://www.flaticon.com/svg/vstatic/svg/761/761769.svg?token=exp=1619176106~hmac=45fbb45a25c7f8bde8484e658b765144"
      className="beer-button"
      onClick={haveBeer}
    />
    /* {beerButton==="Beer" ? <img style={{width:"50px",backgroundColor:'transparent'}} alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button> */
  );
}

export default BeerButton;
