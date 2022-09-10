import React, { useState } from 'react'

const Todo = ({onRemoveTodo, todo}) => { // remove props and replace with the param onRemoveTodo and todo (lowercase bc its a property) in curly braces
    const [checked, setChecked] = useState(false);

    const handleCompleted = () => {
        setChecked(!checked)
    }

    const handleEdit = () => {

    }

    const handleDelete = (id) => {
        onRemoveTodo(id);
    }

    // console.log(props); // props destructured and no longer needed.

    return (
        // property access question marks that helps when properties are undefined
        <li>{todo?.text}
            <input type='checkbox' onChange={handleCompleted} checked={checked} />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete(todo?.)}>Delete</button>
        </li>
    )

};

export default Todo
