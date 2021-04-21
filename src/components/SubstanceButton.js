import React from 'react';

function SubstanceButton({substanceName, addDrinks}){
    return (
        <button className='substance-button'  onClick={addDrinks}>
           {substanceName==="Beer"? <img style={{width:"50px"}} src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button>
    );
};

export default SubstanceButton;