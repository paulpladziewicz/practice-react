// Notes: revisit event object/ e.target
// destructuring two values: state and function; use function to update state.

import React, { useState } from "react" // import react and specifically useState

const TodoInput = () => {
    // include input and setInput
    // when you use useState, you give it an initial string
    // 
    const [input, setInput] = useState('');
    console.log(input);
    const handleOnChange = (e) => {
        console.log('text entered changed');
        // console.log(e.target.value); // relevant upon striking a key
        setInput(e.target.value);

    }
    return (
        <div>
            {/* created a value attribute for input */}
            <input type='text' value={input} onChange={handleOnChange} />
            <button>Submit</button>
        </div>
    )
}

export default TodoInput;