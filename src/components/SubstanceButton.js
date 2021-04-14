import React from 'react';

function SubstanceButton(props) {
    return (
        <button className='substance-button'>{props.substanceName}</button>
    );
};

export default SubstanceButton;