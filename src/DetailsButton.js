import React from "react";
import styles from './DetailsButton.module.css';
function DetailsButton({children}){
    return (
                <button className={styles.button}>{children}</button>
    )
}
export default DetailsButton;