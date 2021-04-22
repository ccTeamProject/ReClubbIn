import React from 'react';

function SmileyButton({smileyButton, haveSmiley}){
    return (
        <button className='smiley-button'  onClick={haveSmiley}>
           {smileyButton==="Smiley" ? <img style={{width:"50px"}} alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button>
    );
};

export default SmileyButton;