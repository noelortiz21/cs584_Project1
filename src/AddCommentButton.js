import React from "react";
import styles from './AddCommentButton.module.css'
function AddCommentButton({children}){
    return (
        
        <button className={styles.button}>Add Comment</button>
    )
}
export default AddCommentButton;