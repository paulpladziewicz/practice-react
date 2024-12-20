import React, { useState } from 'react'
import styles from '../styles/Todo.module.css'

const Todo = ({ removeTodo, strikeTodo, todo, updateTodo }) => {
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [input, setInput] = useState(todo?.text);

    const handleComplete = (id) => {
        if (todo?.id === id) {
            setChecked(!checked);
            strikeTodo(id);
        };
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleDelete = (id) => {
        removeTodo(id);
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleUpdate = (id) => {
        updateTodo(input, id);
        setEditMode(false);
    }

    return (

        <div className={styles['todo']}>
            {
                !editMode ?
                    <li>
                        <div>{todo?.text}</div>

                        <div className={`${styles['buttons']}`}>

                            {/* onChange vs onClick */}
                            <input className={styles['mr-4']} type='checkbox' onChange={() => handleComplete(todo?.id)} checked={checked} />

                            <button className={styles['mr-4']} onClick={handleEdit}>Edit</button>

                            <button onClick={() => handleDelete(todo?.id)}>Delete</button>
                        </div>
                    </li> :
                    <li>
                        <input type='test' onChange={(e) => handleInputChange(e)} value={input} />
                        <button onClick={() => handleUpdate(todo?.id)}>Update</button>
                    </li>
            }

        </div>

    )

};

export default Todo


