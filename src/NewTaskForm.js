import React from "react";
import styles from './NewTaskForm.module.css';
import DetailsButton from "./DetailsButton";
import NewTaskFormButton from "./NewTaskFormButton";

function NewTaskForm(){
    return (
        <form className={styles.formWrapper}>
            <div className ={styles.formTitleWrapper}>
            <h6 >Create A New Task</h6> 
            </div>
            <label>Task Name</label>
            <input className={styles.fullWidth}></input>
            <label>Task Description</label>
            <textarea className={styles.fullWidth}></textarea>
            <NewTaskFormButton></NewTaskFormButton>

        </form>
    )
}
export default NewTaskForm;