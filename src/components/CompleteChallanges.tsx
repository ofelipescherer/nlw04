import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompleteChallanges.module.css'

export function CompleteChallanges(){
    const { challengesCompleted } = useContext(ChallengeContext);

    return (
        <div className={styles.completeChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}