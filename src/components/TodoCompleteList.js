import React from 'react' //employ useState when ready
import TodoComplete from './TodoComplete'
import styles from '../styles/TodoCompleteList.module.css'

const TodoCompleteList = ({ checked, listItems, strikeTodo }) => {
    // console.log(todo);
    // set up react hook with boolean default
    // const [removeStrike, setRemoveStrike] = useState(false);

    return (
        <div className={styles['complete-div']}>
            <h2>Complete!</h2>
            <div className={styles['complete-list']}>

                {listItems.map(item => {
                    // console.log(item);
                    if (!item.completed) return null;
                    return (
                        <TodoComplete key={item.id} item={item} checked={checked} onStrikeTodo={strikeTodo} />
                    )
                })}


            </div>
        </div>
    )
}

export default TodoCompleteList