import Todo from './Todo'

const TodoList = (props) => {
    // destructuring objects
    const { onRemoveTodo } = props;
    return (
        <div>
            {props.listItems.map(item => {
                return <Todo key={item.id} todo={item} onRemoveTodo={ } />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.