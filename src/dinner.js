import React from 'react';

function Dinner(props){
    return(
    <div>
        <h1> WELCOME TO {props.country} </h1>
        <h1> We are visiting {props.place}</h1>
    </div>
    )
}

export default Dinner;