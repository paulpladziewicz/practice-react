import React, {useState} from "react" // import react and specifically useState

const TodoInput = () => {
    const []
    const handleOnChange = () => {
        console.log('text entered changed');
    }
    return (
        <div>
            <input type="text" onChange={handleOnChange}/>
            <button>Submit</button>
        </div>
    )
}

export default TodoInput;