import React from 'react';
import ReactDOM from 'react-dom';

const Input = function (props) {
    return (
        <div>
            <label>{props.type}:</label>
            <input type="text" id={props.type} onChange={(e) => {props.onChange(e, props.type)}}/>
        </div>
    );
}

export default Input;