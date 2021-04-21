import React from 'react';

function SubstanceButton({substanceName, haveBeer}){
    return (
        <button className='substance-button'  onClick={haveBeer}>
           {substanceName==="Beer"? <img style={{width:"50px"}} src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button>
    );
};

export default SubstanceButton;