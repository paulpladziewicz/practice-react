// imports from react
import React, { useState } from 'react'
// function for Todo takes in a param: props
const Todo = (props) => {
    // destructuring: declaring two variables and assigning useState with a 'false' param: does setChecked(checked) === useState(false)?
    const [checked, setChecked] = useState(false);
    // console.log(setChecked(checked), useState(false)) // find undefined, then an array, respectively.
    const handleCompleted = () => {
        setChecked(!checked)

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    console.log(props);

    return (
        // property access question marks that helps when properties are undefined
        <li>{props?.todo?.text}
            <input type='checkbox' onChange={handleCompleted} checked={checked} />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )

};

export default Todo
