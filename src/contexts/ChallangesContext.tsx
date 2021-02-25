import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json'

interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    ChallengesCompleted: number;
    activeChallenge: Challange;
    levelUp: () => void;
    startNewChallenge: () => void;
}

type ChallengeProviderProps ={
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallangeProvider({ children } : ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [ChallengesCompleted, setChallengesCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = (Math.floor(Math.random() * challenges.length))
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    return (
        <ChallengeContext.Provider value={
            { 
            level,
            currentExperience,
            ChallengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}