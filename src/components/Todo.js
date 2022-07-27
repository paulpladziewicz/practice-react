const Todo = (props) => {
    const handleCompleted = () => {

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return (
        <li>{props.item}
            <input type='checkbox' onChange={handleCompleted} checked='true' />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )

};

export default Todo
