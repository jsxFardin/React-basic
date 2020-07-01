import React from 'react';

function Calculator(props) {
    
    console.log(props);

    return (
        <div>
            <h2>{props.num1 + props.num2}</h2>
        </div>
    );
}

export default Calculator;