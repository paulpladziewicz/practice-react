import React, {useState} from "react" // import react and specifically useState

const TodoInput = () => {
    // include input and setInput
    const [input, setInput] = useState('test')
    const handleOnChange = (e) => {
        // console.log('text entered changed');
        setInput(e.target.value))
    }
    return (
        <div>
            {/* created a value attribute for input */}
            <input type='text' value={input} onChange={handleOnChange}/>
            <button>Submit</button>
        </div>
    )
}

export default TodoInput;