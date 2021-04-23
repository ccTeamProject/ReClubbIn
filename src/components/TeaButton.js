import React from 'react';

function TeaButton({teaButton, haveTea}){
    return (
        <button className='tea-button'  onClick={haveTea}>
           {teaButton==="Tea" ? <img style={{width:"50px"}} alt="" src="https://www.svgrepo.com/show/184506/tea-cup-tea.svg"/> : null}
        </button>
    );
};

export default TeaButton;