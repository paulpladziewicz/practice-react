import Todo from './Todo'

const TodoList = (props) => {
    // 
    return (
        <div>
            {props.listItems.map(item => {
                return <Todo key={item.id} todo={item} />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.