import React from 'react';

function BeerButton({beerButton, haveBeer}){
    return (
        <button className='beer-button'  onClick={haveBeer}>
           {beerButton==="Beer" ? <img style={{width:"50px"}} alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2447/2447137.svg"/> : null}
        </button>
    );
};

export default BeerButton;