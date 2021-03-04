import { useContext } from 'react'
import { ChallengeContext } from '../contexts/challengesContext'
import { CountdownContext } from '../contexts/countdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSuceed() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {  
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSuceed}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>
              Finalize um ciclo
              para receber desafios.
        </strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Complete-os para ganhar xp e avançar de nivel.
        </p>
          </div>
        )}
    </div>
  )
}