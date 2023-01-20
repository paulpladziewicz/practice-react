import React from "react";
import styles from '../styles/TodoComplete.module.css'

const TodoComplete = ({ item, checked }) => {

    return (
        <div className={styles['complete']}>
            <li>
                <div>{item.text}</div>
                <div>
                    <input className={styles['mr-4']} type="checkbox" checked={!checked} />
                    <button className={`${styles['complete-buttons']} ${styles['mr-4']}`}>Edit</button>
                    <button className={styles['complete-buttons']}>Delete</button>
                </div>
            </li >
        </div >
    )
}

export default TodoComplete