// imports
import Todo from './Todo'
import styles from '../styles/TodoList.module.css'
// import list function that takes in a props paramTodo from './Todo'
// list function that takes in a props param
const TodoList = (props) => {
    // destructuring props object
    const { onRemoveTodo, strikeTodo, updateTodo } = props;
    // console.log(props); // contains listItems, onRemoveTodo, and updateTodo properties



    // return statements
    return (
        // create a set of divs
        <div className={styles['todo-list']}>
            {/* map method sets up for a return of list items and their respective attributes in a particular order */}
            {props.listItems.map(item => {
                // included strikeTodo as part of the return statement
                return <Todo key={item.id} todo={item} onRemoveTodo={onRemoveTodo} updateTodo={updateTodo} strikeTodo={strikeTodo} />
            })}
        </div>
    );
}

export default TodoList;


// each component needs a key when mapping in react.