import React, { Component } from 'react';
export default function QuizDaGaleraPage() {
    return (
        <div>
            Desafio da próxima aula, junto com as animações.
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query.id);
    return {
      props: {

      }, // will be passed to the page component as props
    }
  }