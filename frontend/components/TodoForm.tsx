import React, { SyntheticEvent, useState } from "react";
import { FormControl, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import { useInputChangeHandler } from "../hooks/useChangeHandler";
import { ITodo } from "../interfaces";

import styles from '../styles/TodoForm.module.css';

export type TodosFormValues = ITodo;

interface ITodoFormProps {
  submit: (values: TodosFormValues) => void;
}

export default function TodoForm({ submit }: ITodoFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleNameChange = useInputChangeHandler(setName);
  const handleDescriptionChange = useInputChangeHandler(setDescription);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setName('');
    setDescription('');

    submit({
      name,
      description,
      state: 'created'
    });
  }

  return (
    <form className={styles.form}>
      <FormControl>
        <TextField id="todo-input-name" onChange={handleNameChange} value={name} label="Name of todo" />
      </FormControl>
      <FormControl>
        <TextField id="todo-input-desc" onChange={handleDescriptionChange} value={description} label="Description of todo" />
      </FormControl>
      <Button type="submit" onClick={handleSubmit} variant="contained" >submit</Button>
    </form>
  );
}