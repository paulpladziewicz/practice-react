import Todo from './components/Todo'

const TodoList = (props) => {
    return (
        <div>
            {props.listItems.map(item => {
                return <Todo />
            })}
        </div>
    );
}

export default TodoList;


// 