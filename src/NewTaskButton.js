import React from "react";
import styles from './NewTaskButton.module.css';
function NewTaskButton({children}){
    return (
        <div className={styles.flex}>
                <button className={styles.button}>{children}</button>
                </div>
    )
}
export default NewTaskButton;