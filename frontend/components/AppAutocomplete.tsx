import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import styles from '../styles/Autocomplete.module.css';


interface AppAutoCompleteProps {
    options: any[];
    getOptionLabel: (option: any) => string;
    label?: string;
}


export default function AppAutoComplete({
    options,
    getOptionLabel,
    label = 'test'
}: AppAutoCompleteProps) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={options}
            getOptionLabel={getOptionLabel}
            className={styles.container}
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