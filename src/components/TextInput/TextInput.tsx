import React, {FC} from 'react';
import styles from './TextInput.module.scss'

interface ITextInput {
    title: string,
    value: string,
    setValue: (val: string) => void,
    multiline?: boolean
}

const TextInput: FC<ITextInput> = ({title, value, setValue, multiline = false}) => {
    return (
        <div className={styles.textInput}>
            <p>{title}</p>
            {!multiline
                ? <input type={"text"} value={value} onChange={e => setValue(e.target.value)}/>
                : <textarea value={value} onChange={e => setValue(e.target.value)}/>
            }
        </div>
    );
};

export default TextInput;