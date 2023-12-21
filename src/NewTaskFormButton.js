import React from "react";
import styles from './NewTaskFormButton.module.css'
function NewTaskFormButton({children}){
    return (
        <button className={styles.button}>{children}</button>
    )
}
export default NewTaskFormButton;