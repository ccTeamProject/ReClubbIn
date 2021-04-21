import React from 'react';

function SubstanceButton({substanceName, addDrinks}){
    return (
        <button className='substance-button'  onClick={addDrinks}>
           {substanceName==="Beer"? <img style={{width:"50px"}} src="https://www.flaticon.com/svg/vstatic/svg/925/925764.svg?token=exp=1618529145~hmac=2ee216a56e44e950d974539f59b213b7"/> : null}
        </button>
    );
};

export default SubstanceButton;