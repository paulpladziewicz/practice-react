import React, {useState} from 'react'

const Todo = (props) => {
    const [checked, setChecked] = useState(false);
    const handleCompleted = () => {

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return (
        <li>{props.item.text}
            <input type='checkbox' onChange={handleCompleted} checked='false' />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )

};

export default Todo
