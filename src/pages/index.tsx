import { GetServerSideProps } from 'next';
import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";
import styles from '../styles/components/Home.module.css';
import { CompleteChallanges } from "../components/CompleteChallanges";
import { Countdown } from "../components/Countdown";
import ChallangeBox from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountdownContex";
import { ChallangeProvider } from '../contexts/ChallangesContext';
import DarkModeCheck from '../components/DarkModeCheck';

interface HomeProps {
  level : number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props : HomeProps) {
  console.log(props)
  return (
    <ChallangeProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <DarkModeCheck />
        <div className={styles.gamecontainer}>
          <Head>
            <title>Inicio | MoveIT</title>
          </Head>
          
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallanges />
                <Countdown />
              </div>
                <ChallangeBox />
            </section>
          </CountdownProvider>
      </div>
    </div>
  </ ChallangeProvider>
  )
}


export const getServerSideProps : GetServerSideProps = async(ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}