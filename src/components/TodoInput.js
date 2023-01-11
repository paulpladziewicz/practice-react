import React, { useState } from "react"

const log = console.log;


const TodoInput = (props) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit = () => {
        log(props);
        if (input === '') {
            return setError(true)
        };
        props.onAddTodo(input);
        setInput('');
    }


    const handleOnDeleteAll = () => {

        props.onRemoveAllTodo();


    }



    return (
        <div className='mb-4'>
            <input type='text' value={input} onChange={handleOnChange} />
            <button onClick={handleOnSubmit}>Submit</button>
            <button onClick={handleOnDeleteAll}>Delete All</button>
            {error && <small style={{ display: 'block', color: 'red' }}>Please enter a task</small>}
        </div>
    )
}

export default TodoInput;
