import React from 'react';
import { ThemeProvider } from 'styled-components';
import Quiz from './index';
export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz
       externalQuestions={dbExterno.questions}
       externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverResp) => {
        if (serverResp.ok) {
          return serverResp.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((serverRespObject) => serverRespObject)

    return {
      props: {
        dbExterno,
      },
    };
  } catch(err) {
    throw new Error(err);
  }
}