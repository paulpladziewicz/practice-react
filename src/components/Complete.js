import React, { useState } from 'react'
import Todo from './Todo'
import styles from '../styles/Complete.module.css'


const Complete = (props) => {

    return (
        <div className={styles['complete-div']}>
            <h2>Complete!</h2>
            <ul className="to-do-litter">

            </ul>

        </div>
    )
}

export default Complete