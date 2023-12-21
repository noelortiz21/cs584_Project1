import React from "react";
import styles from './ViewDetailsForm.module.css';
import DetailsButton from "./DetailsButton";
import NewTaskFormButton from "./NewTaskFormButton";
import AddCommentButton from "./AddCommentButton";
import UpdateButton from "./UpdateButton";

function ViewDetailsForm(){
    return (
        <form className={styles.formWrapper}>
            <label>Task Name</label>
            <input className={styles.fullWidth}></input>
            <label>Task Description</label>
            <textarea className={styles.fullWidth}></textarea>
            <div className ={styles.formTitleWrapper}>
            <h6 >Comments</h6> 
            </div>
            <UpdateButton></UpdateButton>
            <label>Comment On Task</label>
            <textarea className={styles.fullWidth}></textarea>
            <AddCommentButton></AddCommentButton>
            

        </form>
    )
}
export default ViewDetailsForm;