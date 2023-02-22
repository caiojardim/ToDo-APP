import styles from './TaskList.module.css'
import  clipboard  from '../assets/clipboard.svg'
import { PlusCircle } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';

import { Task } from './Task'

interface TaskType {
  id: number,
  content: string,
  isChecked: boolean
}

export function TaskList () {
  const [taskList, setTaskList] = useState<TaskType[]>([])
  const [newTaskContent, setNewTaskContent] = useState('')

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

  function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault()
    const lastElementId = taskList.length === 0 ? 0 : taskList[taskList.length -1].id
    const taskListWithNewOne = [...taskList,
      {
        id: lastElementId + 1,
        content: newTaskContent,
        isChecked: false
      }
    ]
    setTaskList(taskListWithNewOne)
    setNewTaskContent('')
  }

  function deleteTask(id: number) {
    const TaskListWithDeletedOne = taskList.filter((task) => {
     return task.id !== id
    })
    setTaskList(TaskListWithDeletedOne)
  }

  useEffect (() => {
    let taskList = localStorage.getItem('TaskList') || '[]'
    let taskListObject = JSON.parse(taskList)
    setTaskList(taskListObject)
  }, [])

  useEffect (() => {
    if (taskList.length !== 0) {
      localStorage.setItem('TaskList', JSON.stringify(taskList))
    }   
  }, [taskList])

 

  return (
    <div className={styles.taskListContainer}>
        <form onSubmit={handleCreateNewTask}>
          <div className={styles.newTask}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa' 
              value={newTaskContent}
              onChange={handleNewTaskChange}
              required
            />
            <button type='submit'>Criar <PlusCircle/></button>
          </div>
        </form>
        

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
                    handleToggleIsChecked={toggleIsChecked}
                    handleDeleteTask={deleteTask}
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