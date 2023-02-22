import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'
import { useState } from "react"

interface TaskProps {
  id: number
  content: string
  isChecked: boolean
  handleToggleIsChecked: (id: number) => void
  handleDeleteTask: (id: number) => void
} 

export function Task ({id, isChecked, content, handleToggleIsChecked, handleDeleteTask}:TaskProps) {


  return (
    <div className={styles.task}>
      <label>
        <input 
        type='checkbox' 
        onChange={() => {
          handleToggleIsChecked(id);
        }}
        />
        <span 
          className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : ''}`}
          aria-hidden="true"
        >
          < Check weight='bold' />
        </span>
        <p className={`${isChecked ? styles.taskCompleted : ''}`}>
          {content}
        </p>
      </label>
      <button
        onClick={() => handleDeleteTask(id)}
        title='Deletar Tarefa'
      >
        <Trash />
      </button>
    </div>
  )
}