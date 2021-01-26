import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import IndexPage from '../src/components/IndexPage';
import Button from '../src/components/Button';
import { useRouter } from 'next/router';

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
export const MyTextField = styled.input`
  width: 100%;
  display: block;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 4px 16px;
  min-width: 64px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-weight: 500;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <IndexPage/>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              //vish tomei spoiler
              //router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <MyTextField type='text'
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <Button.Link href="https://alura-quiz-jhonatan-base.jhonatansouza.vercel.app/">Quiz Sobre React</Button.Link>
            <Button.Link href="https://aluraquiz-base-eta.vercel.app/">Quiz Momentos Olímpicos</Button.Link>
            <Button.Link href="https://radioquiz.ajp2511.vercel.app/">Quiz sobre Radiologia</Button.Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YuriRamosC" />
    </QuizBackground>
  );
}