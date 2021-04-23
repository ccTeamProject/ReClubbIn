import React from "react";

function SmileyButton({ smileyButton, haveSmiley }) {
  return (
    <img
      style={{ width: "50px" }}
      alt=""
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Mr._Smiley_Face.svg"
      className="smiley-button"
      onClick={haveSmiley}
    />
    //    {smileyButton==="Smiley" ? <img style={{width:"50px"}} alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Mr._Smiley_Face.svg"/> : null}
    // </button>
  );
}

export default SmileyButton;
