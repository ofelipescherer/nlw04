import { useContext, useEffect, useReducer, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/components/GetName.module.css'

const formReducer = (state, event) => {
    return {
    ...state,
    [event.name]: event.value
    }
}

export default function GetName(){

    const { setPlayerName, CloseGetName } = useContext(ProfileContext);

   const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = event => {
        event.preventDefault();
      }

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }
    
    function setNameW() {
        Object.entries(formData).map(([name, value]) => 
        (setPlayerName(value.toString())));
        CloseGetName();
    }
    
    return(
        <div className={styles.overlay}> 
            <div className={styles.container}>
                <header>Qual seu nome no Github?</header>
                <form className={styles.containerInputButton} onSubmit={handleSubmit}>
                    <input type="text" name="githubName" id="" onChange={handleChange} />
                    <button type="submit" onClick={setNameW}>Confirmar</button>
                </form>
            </div>
        </div>
    )
}
