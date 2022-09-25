import React, { useState } from 'react';
import Item from './Item';

function App() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText('');
    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((v, i) => id !== i);
        });
    }
    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            addItem();
        }
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    onChange={handleChange}
                    type="text"
                    value={inputText}
                    onKeyDown={handleKeypress}
                />
                <button id="btn" onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem, i) => (
                        <Item
                            key={i}
                            text={todoItem}
                            id={i}
                            onClicked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
