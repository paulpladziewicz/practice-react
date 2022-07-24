import React, {useState} from "react" // import react and specifically useState

const TodoInput = () => {
    // 
    const [input, setInput] = useState('test')
    const handleOnChange = () => {
        console.log('text entered changed');
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