import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ChangeEvent } from 'react';
import { ITodo } from '../interfaces';

import styles from '../styles/Autocomplete.module.css';

export type Option = ITodo;

export type OptionSelector = (it: Option[] | null) => void;

interface IAppAutoCompleteProps {
  label?: string;
  options: Option[];
  getOptionLabel: (option: Option) => string;
  onSelect: OptionSelector;
}

export default function AppAutoComplete({
  options,
  getOptionLabel,
  onSelect,
  label = 'test'
}: IAppAutoCompleteProps) {
  const changeHandler = (_: ChangeEvent<{}>, it: Option[] | null) => {
    if (it) {
      return onSelect(it);
    }
    return onSelect(null);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={getOptionLabel}
      className={styles.container}
      onChange={changeHandler}
      multiple
      blurOnSelect={false}
      renderInput={
        (params) => (
          <TextField
            {...params}
            label={label}
            variant="filled"
          />
        )}
    />
  );
}