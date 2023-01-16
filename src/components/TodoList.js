import Todo from './Todo'
import styles from '../styles/TodoList.module.css'

const TodoList = (props) => {
    const { onRemoveTodo, strikeTodo, updateTodo } = props;

    return (

        <div className={styles['todo-list']}>

            {props.listItems.map(item => {
                // component props are the same as what is within the Todo props below
                return <Todo key={item.id} onRemoveTodo={onRemoveTodo} strikeTodo={strikeTodo} todo={item} updateTodo={updateTodo} />
            })}
        </div>
    );
}

export default TodoList
