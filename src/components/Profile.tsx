import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ofelipescherer.png" alt="fe"/>
            <div>
                <strong>Felipe Scherer</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}