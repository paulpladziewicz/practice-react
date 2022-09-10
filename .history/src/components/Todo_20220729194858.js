import React, { useState } from 'react'

const Todo = (props) => {
    const [checked, setChecked] = useState(false);
    const handleCompleted = () => {

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return (
        // property access question marks that helps when properties are undefined
        <li>{props?.item?.text}
            <input type='checkbox' onChange={handleCompleted} checked={checked} />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )

};

export default Todo
