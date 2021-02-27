import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export default function LevelUpModal(){

    const { level, CloseLevelUpModal } = useContext(ChallengeContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>

                <p>Você alcançou um novo level</p>

                <button type="button" onClick={CloseLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    )
    //Colocar uma / no caminho significa que ele vai procurar no root do projeto
}