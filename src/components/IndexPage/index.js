import styled from 'styled-components'
import Head from 'next/head';
import db from '../../../db.json';
export default function IndexPage() {
    return (
        <div>
            <Head>
                <meta property="og:title" content="Warcraft Quiz" key="title" />
                <meta property="og:description" content="Quiz do universo Warcraft, para a Imersão ALura"/>
                <meta property="og:image" content={db.bg} />
            </Head>
        </div>
    )
}