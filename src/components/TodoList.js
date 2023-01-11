 import Todo from './Todo'
import styles from '../styles/TodoList.module.css'

const TodoList = (props) => {

    const { onRemoveTodo, strikeTodo, updateTodo } = props;

    return (

        <div className={styles['todo-list']}>
    
            {props.listItems.map(item => {

                return <Todo key={item.id} todo={item} onRemoveTodo={onRemoveTodo} updateTodo={updateTodo} strikeTodo={strikeTodo} />
            })}
        </div>
    );
}

export default TodoList;
