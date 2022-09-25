import React from 'react';

function Item(props) {
    return (
        <div onClick={() => props.onClicked(props.id)}>
            <li>{props.text} </li>
        </div>
    );
}

export default Item;
