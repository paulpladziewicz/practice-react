const TodoList = (props) => {
    return (
        <div>
            {props.listItems.map(item )}
        </div>
    );
}

export default TodoList;