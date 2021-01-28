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


const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}
export default function Quiz() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const router = useRouter();
  const [pontos, setPontos] = React.useState(0);
  const received = router.query;
  const num = 0;
  const [name, setName] = React.useState(received.name);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    if ((questionIndex +1) < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget/>}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YuriRamosC" />
    </QuizBackground>
  );
}

function ResultWidget() {
  return (
    <Widget>
      <Widget.Header>
        {`Parabéns, você terminou o Quiz, porém, ainda não tem pontuaçao.
        Mas não fique triste não, que daqui a pouco ja ta pronto.`}
      </Widget.Header>
          <Widget.Content>
            <h1>Conheça outros Quizes</h1>
            <Button.Link href='/'>Voltar ao Início</Button.Link>
            <Button.Link href="https://covidquiz.felipevalerio.vercel.app/">Quiz Covid</Button.Link>
            <Button.Link href="https://tibiaquiz-base.lubrum.vercel.app/">Quiz sobre Tibia</Button.Link>
            <Button.Link href="https://radioquiz.ajp2511.vercel.app/">Quiz sobre Radiologia</Button.Link>
          </Widget.Content>
        </Widget>
  )
}
function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}
function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h1>{db.title}</h1>
        <h3>{`Pergunta ${questionIndex + 1} de  ${totalQuestions} `}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
      </Widget.Content>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          onSubmit();
        }}
      >
        {question.alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `alternative_${alternativeIndex}`
          return (
            <Widget.Topic
              as="label"
              style={{ width: 'auto' }}
              htmlFor={alternativeId}
            >
              <input
                //style={{ display: 'none'}}
                id={alternativeId}
                name={questionId}
                type="radio" />
              {alternative}
            </Widget.Topic>
          )
        })}
        <Button type='submit'>
          Confirmar
      </Button>
      </form>
    </Widget>
  )
}