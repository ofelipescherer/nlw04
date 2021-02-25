import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ChallangeBox.module.css'

export default function ChallangeBox() {
    const { activeChallenge } = useContext(ChallengeContext);

    return (
        <div className={styles.challangeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.challangeActive}>
                        <header>Ganhe {activeChallenge.amount}</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button type="button" className={styles.challangeFailButton}>Falhei</button>
                            <button type="button" className={styles.challangesSucceededButton}>Completei</button>
                        </footer>
                    </div>
                ): (
                    <div className={styles.challangesNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando os desafios
                    </p>
                </div>
                )
            }
        </div>
    )
} 