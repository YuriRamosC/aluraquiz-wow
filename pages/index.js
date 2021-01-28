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
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';

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
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
              name='userName'
              onChange={(event)=>  setName(event.target.value) }
              placeholder="Diz ai seu nome"
              value={name}
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
/*export async function getStaticProps() {
  try {
    const retornoDaApi = await fetch('https://api.github.com/users/YuriRamosC')
      .then((respostaDoServer) => {
        return respostaDoServer.json();
      });

    return {
      props: {
        dadosViaStaticProps: "dado simples via static props",
        dadosDoGitHub: retornoDaApi
      }
    }
  } catch(err) {
    throw new Error('Failed');
  }
}*/