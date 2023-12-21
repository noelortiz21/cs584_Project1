import React from 'react';
import Card from './Card';
import NewTaskButton from './NewTaskButton';
import styles from './NewTaskButton.module.css';
import NewTaskForm from './NewTaskForm';
import ViewDetailsForm from './ViewDetailsForm'
import {DndContext, closestCenter} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';
function Ui() {
    const [languages,setLanguages]= React.useState([
        {name:"Javascript",id:1},
        {name:"Python",id:2},
        {name:"Typescript",id:3},]);
    const handleDragEnd=(event)=>{
        const {active, over} = event;

        setLanguages((language)=>{
        const prevIndex = languages.findIndex(language => language.id === active.id);
        const nextIndex = languages.findIndex(language => language.id === over.id); 
        return arrayMove(language,prevIndex,nextIndex);
        })
    }
  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
        <h3>Programming languages</h3>
        <SortableContext
        items={languages}
        strategy={verticalListSortingStrategy}
        >
        {languages.map((language,index)=>(
            <Card language={language} key={index+1}/>
        ))}            
        </SortableContext>
    </DndContext>
  )}





export default Ui;