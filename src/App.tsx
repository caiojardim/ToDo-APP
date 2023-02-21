import './global.css';
import { Header } from './Components/Header'

import  clipboard  from './assets/clipboard.svg'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react';

function App() {
  return (
    <>
      <Header />
      <div className={styles.appContainer}>

        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>Criar <PlusCircle/></button>
        </div>

        <div className={styles.taskStatus}>
          <strong className={styles.colorBlue}>Tarefas criadas <span>5</span></strong>
          <strong className={styles.colorPurple}>Concluídas <span>2 de 5</span></strong>
        </div>

        <div className={styles.tasks}>
          {/* <div className={styles.withoutTasks}>
            <img src={clipboard} alt="Clipboard Icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> */}
          <div>
            <input type='checkbox' />
            <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident labore omnis earum eaque, nihil ut est ullam, repellat fuga praesentium deleniti eum corporis et cupiditate laborum maiores pariatur quidem.</label>
            <button title='Deletar Tarefa'>Deletar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
