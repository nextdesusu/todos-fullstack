import Head from 'next/head';
import React, { useState } from 'react';

import TodoForm from '../components/TodoForm';
import { ITodo } from '../interfaces';
import AppAutoComplete, { Option, OptionSelector } from '../components/AppAutocomplete';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selected, setSelected] = useState<Option[] | null>([]);
  const submit = (todo: ITodo) => setTodos([...todos, todo]);
  const getOptionLabel = (todo: ITodo) => todo.name;
  console.log('selected', selected);
  return (
    <div className={styles.container}>
      <Head>
        <title>Todos Fullstack</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main className={styles.main}>
        <TodoForm submit={submit} />
        <AppAutoComplete options={todos} onSelect={setSelected as OptionSelector} getOptionLabel={getOptionLabel} />
      </main>
    </div>
  )
}
