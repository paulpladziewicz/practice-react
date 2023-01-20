import Todo from './Todo'
import styles from '../styles/TodoList.module.css'

const TodoList = (props) => {
    const { removeTodo, strikeTodo, updateTodo } = props;

    return (

        <div className={styles['todo-list']}>

            {props.listItems.map(item => {
                if (item.completed) return null;
                // component props are the same as what is within the Todo props below
                return <Todo key={item.id} removeTodo={removeTodo} strikeTodo={strikeTodo} todo={item} updateTodo={updateTodo} />
            })}
        </div>
    );
}

export default TodoList
