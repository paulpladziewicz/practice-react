import Todo from './components/Todo'

const TodoList = (props) => {
    return (
        <div>
            {props.listItems.map(item => {
                return <Todo key='' />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.