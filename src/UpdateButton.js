import React from "react";
import styles from './UpdateButton.module.css'
function UpdateButton({children}){
    return (
        <button className={styles.button}>Update</button>
    )
}
export default UpdateButton;