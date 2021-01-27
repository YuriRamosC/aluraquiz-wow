import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Warcraft Quiz</title>
        <link rel="shortcut icon" href={db.wowIcon} />
        <meta property="og:title" content="Warcraft Quiz" key="title" />
        <meta property="og:description" content="Quiz do universo Warcraft, para a Imersão ALura" />
        <meta property="og:image" content={db.bg} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}
