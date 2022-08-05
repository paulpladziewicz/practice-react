// import from Todo, same component folder
import Todo from './Todo'
// function for list that takes the props param
const TodoList = (props) => {
    // return statement with div tags
    return (
        <div>
            console.log(props, props.listItems)
            {props.listItems.map(item => {
                return <Todo key={item.id} todo={item} />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.
