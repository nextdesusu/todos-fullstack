import Head from 'next/head';

import AppAutoComplete from '../components/AppAutocomplete';
import styles from '../styles/Home.module.css';

type Option = {
  title: string;
  value: string;
}

const computeLabel = (item: Option) => item.title;

export default function Home() {
  const options = [
    {title: 'lol', value: 'none'}
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Todos Fullstack</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main className={styles.main}>
        <AppAutoComplete options={options} getOptionLabel={computeLabel} />
      </main>
    </div>
  )
}
