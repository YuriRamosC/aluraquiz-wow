import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import MyTextField from '../src/components/MyTextField';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    background-position: cover;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              console.log('Fazendo uma submissão por meio do react');
              //router
              router.push(`/quiz?name=${name}`);
            }}
            >
              <MyTextField
                type="text"
                onChange={function (event) {
                  console.log(event.target.value);
                  setName(event.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <Button.Link href="https://covidquiz.felipevalerio.vercel.app/">Quiz Covid</Button.Link>
            <Button.Link href="https://tibiaquiz-base.lubrum.vercel.app/">Quiz sobre Tibia</Button.Link>
            <Button.Link href="https://radioquiz.ajp2511.vercel.app/">Quiz sobre Radiologia</Button.Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YuriRamosC" />
    </QuizBackground>
  );
}
