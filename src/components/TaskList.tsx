import styles from './TaskList.module.css'
import  clipboard  from '../assets/clipboard.svg'
import { PlusCircle } from 'phosphor-react';
import { useState, useEffect } from 'react';

import { Task } from './Task'

interface TaskType {
  id: number,
  content: string,
  isChecked: boolean
}

export function TaskList () {
  const [taskList, setTaskList] = useState<TaskType[]>([])

  function toggleIsChecked(id: number) {
    const updatedTaskList = taskList.map ((task) => {
      if (task.id === id) {
        let newTask = {...task, isChecked: !task.isChecked}
        return (newTask)
      } 
      return task
    })
    setTaskList(updatedTaskList)
  }

  useEffect (() => {
    let taskList = localStorage.getItem('TaskList') || '[]'
    let taskListObject = JSON.parse(taskList)
    setTaskList(taskListObject)
  }, [])

  localStorage.setItem ('TaskList', JSON.stringify([
    {
      id:1,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isChecked: false
    }
  ]))

  

  return (
    <div className={styles.taskListContainer}>

        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>Criar <PlusCircle/></button>
        </div>

        <div className={styles.taskStatus}>
          <strong className={styles.colorBlue}>Tarefas criadas <span>5</span></strong>
          <strong className={styles.colorPurple}>Concluídas <span>2 de 5</span></strong>
        </div>

        <div className={styles.tasks}>
          
          {
            (taskList.length !== 0 ) 
            ?       
              taskList.map ((task) => {
                return (
                  <Task 
                    key={task.id} 
                    id={task.id}
                    content={task.content}
                    isChecked={task.isChecked}
                    toggleIsChecked={toggleIsChecked}
                  />
                )
              })
            : 
              <div className={styles.withoutTasks}>
                <img src={clipboard} alt="Clipboard Icon" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div> 
          }
          
        </div>
      </div>
    
  )
}