import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import { motion } from 'framer-motion';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition ={{ delay: 0, duration: 0.5}}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y:'100%' }
          }}
          initial='hidden'
          animate='show'
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name='userName'
                onChange={(event) => setName(event.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition ={{ delay: 0.5, duration: 0.5}}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          initial='hidden'
          animate='show'
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = new URL(linkExterno).host.split(".");

                return (
                  <li key={linkExterno}>
                    <Button.Link as={Link} href={`/quiz/${projectName}___${githubUser}?name=${name}`}>{`Quiz: ${projectName} (${githubUser})`}</Button.Link>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YuriRamosC" />
    </QuizBackground>
  );
}