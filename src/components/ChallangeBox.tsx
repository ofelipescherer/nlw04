import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/ChallangeBox.module.css'

export default function ChallangeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const {resetCountdown} = useContext(CountdownContext) 

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        handleChallengeSucceeded();
    }

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
                            <button 
                            type="button" 
                            className={styles.challangeFailButton} 
                            onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>
                            <button 
                            type="button" 
                            className={styles.challangesSucceededButton} 
                            onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
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