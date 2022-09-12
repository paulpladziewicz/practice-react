// imports
import React, { useState } from 'react'
import styles from '../styles/Todo.module.css'
// 

// abbrev logs to console
// const log = console.log;

const Todo = ({ onRemoveTodo, strikeTodo, todo, updateTodo }) => { // remove props and replace with the param onRemoveTodo, todo (lowercase bc its a property), and updateTodo in curly braces
    // console.log(todo); // data.json list with keys in alphabetical order
    const [checked, setChecked] = useState(false);
    // setting up useState for edits
    const [editMode, setEditMode] = useState(false);
    // setting up useState with inputs: use empty string
    const [input, setInput] = useState(todo?.text);
    // setting up useState with a boolean for strikes
    // const [strike, setStrike] = useState(false);

    const handleCompleted = () => {
        setChecked(!checked);
        console.log(todo);

    }

    const handleEdit = () => {
        // to click edit mode should set edit mode to true
        setEditMode(true);
    }

    const handleDelete = (id) => {
        onRemoveTodo(id);
    }

    // setting up handling changing input
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    // setting up handle for update
    const handleUpdate = (id) => {
        // call updateTodo
        updateTodo(input, id);
        setEditMode(false);
    }

    // setting up handle for strikes
    const handleStrikes = () => {
        strikeTodo(todo);
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

        <div className={styles['todo']}>
            {
                !editMode ?
                    <li>
                        {/* placed text within div to implement strikethrough */}
                        {/* <div className={styles['strike-through']}>{todo?.text}</div> */}

                        <div>{todo?.text}</div>

                        <div className={`${styles['buttons']}`}>
                            {/* before change to checked attribute */}
                            {/* <input className={styles['mr-4']} type='checkbox' onChange={() => handleCompleted(todo?.id)} checked={todo?.completed ? true : false} /> */}

                            {/* after change to checked attribute: changed the value of the checked attribute to regain functionality of the checking action. */}
                            {/* set an onCLick handler for strike-through occurrences */}
                            <input className={styles['mr-4']} type='checkbox' onChange={() => handleCompleted(todo?.id)} onClick={handleStrikes} checked={checked} />
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
