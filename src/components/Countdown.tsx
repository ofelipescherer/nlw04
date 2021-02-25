import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengeContext);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //padStart= ele vai tentar dividir os minutos, caso não tenha 2 numeros, ele adicionara um '0' no start ou seja 05, 06 etc
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');    
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');   

    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60)
    }

    //useEffect serve para acontecer algo quando algo mudar. Nesse caso, quando o valor de isActive ou time(está no array de dependencias) mudar,
    //ele vai disparar a função que está dentro da arrow function
    useEffect(() => {
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if(isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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