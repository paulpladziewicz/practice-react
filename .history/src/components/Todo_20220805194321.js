import React, { useState } from 'react'

const Todo = ({ onRemoveTodo, todo, updateTodo }) => { // remove props and replace with the param onRemoveTodo and todo (lowercase bc its a property) in curly braces
    const [checked, setChecked] = useState(false);
    // setting up useState for edits
    const [editMode, setEditMode] = useState(false);
    // setting up useState with inputs: use empty string
    const [input, setInput] = useState('');

    const handleCompleted = () => {
        setChecked(!checked)
    }

    const handleEdit = () => {
        
    }

    const handleDelete = (id) => {
        onRemoveTodo(id);
    }

    // setting up handling changing input
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    // setting up handle for update
    const handleUpdate = () => {

    }

    // console.log(props); // props destructured and no longer needed.

    return (
        // property access question marks that helps when properties are undefined
        // <li>{todo?.text}
        //     <input type='checkbox' onChange={handleCompleted} checked={checked} />
        //     <button onClick={handleEdit}>Edit</button>
        //     {/* include arrow function within onClick to regulate delete button */}
        //     <button onClick={() => handleDelete(todo?.id)}>Delete</button>
        // </li>

        <div>
            {
                !editMode ?
                    <li>
                        {todo?.text}
                        <input type='checkbox' onChange={() => handleCompleted(todo?.id)} checked={todo?.completed ? true : false} />
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => handleDelete(todo?.id)}>Delete</button>
                    </li> :
                    <li>
                        <input type='test' onChange={(e) => handleInputChange(e)} value={input} />
                        <button onClick={() => handleUpdate(input, todo?.id)}>Update</button>
                    </li>
            }

        </div>

    )

};

export default Todo
