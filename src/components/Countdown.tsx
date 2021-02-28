import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);    

    //padStart= ele vai tentar dividir os minutos, caso não tenha 2 numeros, ele adicionara um '0' no start ou seja 05, 06 etc
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');    
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');   

    

    return (
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button disabled className={styles.countdownButton}>
            Ciclo Encerrado
            </button> 
            ) : (
            <>
            { !isActive ? (         
                <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                    Iniciar um ciclo
                </button> ) : (
                <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                    Abandonar ciclo
                </button> )
                }
            </>)
        }
    </div>
    );
}