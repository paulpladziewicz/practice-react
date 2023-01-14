import React, { useState } from 'react'
import styles from '../styles/Todo.module.css'

const Todo = ({ onRemoveTodo, strikeTodo, todo, updateTodo }) => {
    // console.log(todo);
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [input, setInput] = useState(todo?.text);

    const handleComplete = (id) => {
        if (todo?.id === id) {
            setChecked(!checked);
        }
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleDelete = (id) => {
        onRemoveTodo(id);
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleStrike = (id) => {
        onRemoveTodo(id);
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
                            <input className={styles['mr-4']} type='checkbox' onChange={() => handleComplete(todo?.id)} onClick={() => handleStrike(todo?.id)} checked={checked} />

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


