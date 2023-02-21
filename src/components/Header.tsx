import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocket} alt="Icone de foguete" />
        <div className={styles.logoText}>
          <strong className={styles.colorBlue}>to</strong>
          <strong className={styles.colorPurple}>do</strong>
        </div>
      </div>
    </header>
  )
}