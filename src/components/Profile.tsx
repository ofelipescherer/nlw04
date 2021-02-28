import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallangesContext';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengeContext);
    const { playerGithubName, CloseGetName } = useContext(ProfileContext);

    const [playerName, setPlayerName] = useState(playerGithubName);
    const [profileImage, setProfileImage] = useState(`https://github.com/${playerName}.png`);

    useEffect(() => {      
        if(playerName === 'undefined'){
            setPlayerName('Jogador')
            setProfileImage('https://github.com/github.png')
        } else {
            setPlayerName(playerGithubName);
            setProfileImage(`https://github.com/${playerGithubName}.png`)
            CloseGetName();
        }
    }, [playerGithubName])

    function changeImage() {
        setProfileImage('https://github.com/github.png');
    }

    return(
        <div className={styles.profileContainer}>
            <img src={profileImage}  alt="Profile Image" onError={changeImage}/>
            <div>
                <strong>{playerName}</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}