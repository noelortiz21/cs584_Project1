import React from "react";
import styles from './Card.module.css';
import DetailsButton from "./DetailsButton";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';
function Card({language}){
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition}=useSortable({id:language.id});
    const style ={
        transform:CSS.Transform.toString(transform),
        transition,
    }
    return (
        <div className={styles.card} 
            style={style}
            ref={setNodeRef}
             {...attributes}
             {...listeners}>

             <div className={styles.cardupper} >
               <p>Jump Start 2</p>
               <p>Display Order {language.name}</p>
             </div> 

            <div className={styles.cardlower}>
                <DetailsButton>View Details</DetailsButton>
            </div>
        </div>
    )
}
export default Card;