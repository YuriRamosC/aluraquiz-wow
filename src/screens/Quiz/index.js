import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import Button from '../../components/Button';
import AlternativesForm from '../../components/AlternativesForm'
import QuizContainer from '../../components/QuizContainer';
import BackLinkArrow from '../../components/BackLinkArrow';
import Link from '../../components/Link';


const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

export default function Quiz({externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const router = useRouter();
  const [pontos, setPontos] = React.useState(0);
  const received = router.query;
  const [results, setResults] = React.useState([]);
  const num = 0;
  const [name, setName] = React.useState(received.name);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const bg = externalBg;
  const StyledCircularProgress = styled(CircularProgress)`

  && {
    &.MuiCircularProgress-colorPrimary {
      color: ${db.theme.colors.secondary};
    }
  }`;
  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmitQuiz() {
    if ((questionIndex + 1) < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget StyledCircularProgress={StyledCircularProgress}/>}

        {screenState === screenStates.RESULT && <ResultWidget results={results} name={name} />}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YuriRamosC" />
    </QuizBackground>
  );
}

function ResultWidget({ results, name }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href='/'/>
        {`${name}, você acertou ${results.filter((x) => x).length} de ${results.length} questões`}
      </Widget.Header>
      <Widget.Content>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #{index + 1} Resultado: { result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>

        <Button.Link as={Link} href='/'>Voltar ao Início</Button.Link>
      </Widget.Content>
    </Widget>
  )
}

function LoadingWidget({StyledCircularProgress}) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <StyledCircularProgress color='primary' />
      </Widget.Content>
    </Widget>
  );
}
function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
      <BackLinkArrow href="/" />
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
      <AlternativesForm
        onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
            onSubmit();
          }, 2 * 1000);
        }}
      >
        {question.alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `alternative_${alternativeIndex}`
          const selectedAlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
          const isSelected = selectedAlternative === alternativeIndex;
          return (
            <Widget.Topic
              as="label"
              key={alternativeId}
              htmlFor={alternativeId}
              style={{ width: 'auto' }}
              data-selected={isSelected}
              data-status={isQuestionSubmited && selectedAlternativeStatus}
            >
              <input
                style={{ display: 'none' }}
                id={alternativeId}
                name={questionId}
                onChange={() => setSelectedAlternative(alternativeIndex)}
                type="radio" />
              {alternative}
            </Widget.Topic>
          )
        })}
        <Widget.Content>
          <Button type='submit' disabled={!hasAlternativeSelected}>
            Confirmar
      </Button>
        </Widget.Content>
        {/*isQuestionSubmited && isCorrect && <p>Você acertou!</p>*/}
        {/*isQuestionSubmited && !isCorrect && <p>Você errou!</p>*/}
      </AlternativesForm>
    </Widget>
  )
}