import React, { useState } from "react";
import styles from '../styles/Complete.module.css'

const Complete = ({ checked, strikeTodo, todo }) => {

    const handleStrike = (complete) => {
        strikeTodo(complete);
    }

    console.log(todo?.text);

    return (
        <div className={styles['complete']}>
            {
                !checked ?
                    null :
                    <li>
                        <div strike={strike}>{todo?.text}</div>

                        <div>
                            <input className={styles['mr-4']} type='checkbox' onChange={() => handleStrike(todo?.id)} checked={!checked} />
                        </div>
                    </li>
            }

        </div>
    )
}

export default Complete