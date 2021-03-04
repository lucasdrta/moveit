import React from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css'
import Profile from '../components/Profile';
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/countdownContext";
import { ChallengesProvider } from "../contexts/challengesContext";

interface HomeProps {
  level: number,
  challengesCompleted: number,
  currentChallenge: number
}

export default function Home(props) {
  console.log(props)
  
  return (
    <ChallengesProvider 
      level={props.level}
      challengesCompleted={props.challengesCompleted}
      currentExperience={props.currentExperience}
    >
      <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}