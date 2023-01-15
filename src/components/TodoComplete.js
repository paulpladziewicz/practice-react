import React from 'react' //employ useState when ready
import Complete from './Complete'
import styles from '../styles/TodoComplete.module.css'

const TodoComplete = ({ checked, removeTodo, strikeTodo, todo }) => {
    // console.log(todo);
    // set up react hook with boolean default
    // const [removeStrike, setRemoveStrike] = useState(false);

    return (
        <div className={styles['complete-div']}>
            <h2>Complete!</h2>
            <div className={styles['complete-list']}>
                <div className="complete-text">
                    <Complete checked={checked} onRemoveTodo={removeTodo} strikeTodo={strikeTodo} />
                </div>
            </div>
        </div>
    )
}

export default TodoComplete