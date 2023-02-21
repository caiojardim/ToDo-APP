import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'
import { useState } from "react"

export function Task () {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={styles.task}>
      <label>
        <input 
        type='checkbox' 
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        />
        <span 
          className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : ''}`}
          aria-hidden="true"
        >
          < Check weight='bold' />
        </span>
        <p className={`${isChecked ? styles.taskCompleted : ''}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. 
        </p>
      </label>
      <button title='Deletar Tarefa'><Trash /></button>
    </div>
  )
}