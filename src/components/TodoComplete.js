import React, { useState } from 'react'
import Todo from './Todo'
import TodoList from './TodoInput'
import styles from '../styles/TodoComplete.module.css'

const TodoComplete = () => {
    console.log();

    return (
        <div className={styles['complete-div']}>
            <h2>Complete!</h2>
            <div className={styles['complete-list']}>

            </div>
        </div>
    )
}

export default TodoComplete