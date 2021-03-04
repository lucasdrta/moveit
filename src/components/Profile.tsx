import { useContext } from 'react'
import { ChallengeContext } from '../contexts/challengesContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile () {
  const { level } = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucasdrta.png" alt="Profile"/>
      <div>
        <strong>Lucas Duarte</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}