import React from "react";

function TeaButton({ teaButton, haveTea }) {
  return (
    <img
      style={{ width: "50px" }}
      alt=""
      src="https://assets.dryicons.com/uploads/icon/svg/11090/467ea0d0-86d3-4620-b4f1-d870de0ea2bc.svg"
      className="smiley-button"
      onClick={haveTea}
    />
  );
}

export default TeaButton;
