import Todo from './Todo'

const TodoList = (props) => {
    // destructuring objects
    const { onRemoveTodo, updateTodo } = props;
    return (
        <div>
            {props.listItems.map(item => {
                return <Todo key={item.id} todo={item} onRemoveTodo={onRemoveTodo} updateTodo={} />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.