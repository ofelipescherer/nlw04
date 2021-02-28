import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import GetName from "../components/GetName";

interface ProfileContextData {
    CloseGetName: () => void;
    setPlayerName: (nome : String) => void;
    playerGithubName: String;
}

type ProfileProviderProps ={
    children: ReactNode;
    playerGithubName: String,
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ 
    children, 
    ...rest
} : ProfileProviderProps){

    const [isGetNameOpen, setIsGetNameOpen] = useState(true);

    const [playerGithubName, setPlayerGithubName] = useState(rest.playerGithubName);

    useEffect(() => {
        Cookies.set('playerGithubName', String(playerGithubName));
    }, [playerGithubName])

    function CloseGetName(){
        setIsGetNameOpen(false);
    }

    function setPlayerName(nome : String){
        setPlayerGithubName(nome);
    }

    useEffect(() => {
        Cookies.set('playerGithubName', String(playerGithubName));
    }, [])

    return (
        <ProfileContext.Provider value={{CloseGetName, setPlayerName, playerGithubName}}>
            {children}
            {isGetNameOpen && <GetName />}
        </ProfileContext.Provider>
    )
}