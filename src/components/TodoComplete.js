import React from 'react' //employ useState when ready
import styles from '../styles/TodoComplete.module.css'

const TodoComplete = () => {
    // console.log(todo);
    // set up react hook with boolean default
    // const [removeStrike, setRemoveStrike] = useState(false);


    return (
        <div className={styles['complete-div']}>
            <h2>Complete!</h2>
            <div className={styles['complete-list']}>
                <div className="complete-text">

                </div>
            </div>
        </div>
    )
}

export default TodoComplete