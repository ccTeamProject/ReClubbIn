import React from 'react';

function TeaButton({teaButton, haveTea}){
    return (
        <button className='tea-button'  onClick={haveTea}>
           {teaButton==="Tea" ? <img style={{width:"50px"}} alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button>
    );
};

export default TeaButton;