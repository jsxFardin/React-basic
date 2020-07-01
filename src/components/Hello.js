import React from 'react';

function Hello(props) {
    
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Age : {props.age}</h2>
            <h2>Profession : {props.profession}</h2>
        </div>
    )
}

export default Hello;