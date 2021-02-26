import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";
import styles from '../styles/components/Home.module.css';
import { CompleteChallanges } from "../components/CompleteChallanges";
import { Countdown } from "../components/Countdown";
import ChallangeBox from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountdownContex";


export default function Home() {
  return (
    <div className={styles.container}>
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
  )
}
