import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ofelipescherer.png" alt="fe"/>
            <div>
                <strong>Felipe Scherer</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}