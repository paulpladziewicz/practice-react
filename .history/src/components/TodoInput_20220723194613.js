// Notes: revisit event object/ e.target
// destructuring 

import React, { useState } from "react" // import react and specifically useState

const TodoInput = () => {
    // include input and setInput
    // when you use useState, you give it an initial string
    // 
    const [input, setInput] = useState('');
    console.log(input);
    const handleOnChange = (e) => {
        // console.log('text entered changed');
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