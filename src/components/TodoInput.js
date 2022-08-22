// Notes: revisit event object/ e.target
// destructuring two values: state and function; use function to update state.


// SETTING UP FOR TASK SUBMISSION

import React, { useState } from "react" // import react and specifically useState

// abbrev logs to console
const log = console.log;

// targeting the input text area and process of submission
const TodoInput = (props) => {
    // include input and setInput
    // as a default, useState initially has an empty string
    // since we are using useState, second variable in destructure will have "set" as prefix.
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    // declare a function that handles changes within input text area and takes in an event as a param.                 
    const handleOnChange = (e) => {
        // through the event, we setInput to the event.target.value of the keys we press.
        setInput(e.target.value);
    }
    // declare function to handle the process of submission upon clicking the button; empty param.
    const handleOnSubmit = () => {
        // check props to understand how onAddTodo became relevant
        log(props);
        // conditional statement
        if (input === '') {
            // return statement to stop process in its tracks.
            return setError(true)
        };
        props.onAddTodo(input);
        setInput('');
    }

    // declare a function that deletes all tasks
    const handleOnDeleteAll = () => {
        // use filter method to remove all tasks
        props.onRemoveAllTodo();


    }



    return (
        <div className='mb-4'>
            {/* created a value attribute for input */}
            <input type='text' value={input} onChange={handleOnChange} />
            <button onClick={handleOnSubmit}>Submit</button>
            <button onClick={handleOnDeleteAll}>Delete All</button>
            {/* conditionl render */}
            {error && <small style={{ display: 'block', color: 'red' }}>Please enter a task</small>}
        </div>
    )
}

export default TodoInput;
