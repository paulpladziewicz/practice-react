// Notes: revisit event object/ e.target
// destructuring two values: state and function; use function to update state.

import React, { useState } from "react" // import react and specifically useState

const TodoInput = () => {
    // include input and setInput
    // when you use useState, you give it an initial string
    const [input, setInput] = useState('');

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit = () => {
        
    }
    return (
        <div className='mb-4'>
            {/* created a value attribute for input */}
            <input type='text' value={input} onChange={handleOnChange} />
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default TodoInput;
