import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './FileInput.module.scss'
import Button from "../Button/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";

interface IFileInput {
    image: string | undefined,
    setImage: (img: string | undefined) => void,

}

const FileInput: FC<IFileInput> = observer ( ({image, setImage}) => {

    const input = useRef(null)

    return (
        <div className={styles.fileInput}>
            <div className={styles.images}>
                {image &&
                    <div className={styles.imageWrap}>
                        <DeleteIcon onClick={() => {
                            setImage(undefined)
                        }} className={styles.deleteIcon}/>
                        <img src={image}/>
                    </div>
                }
            </div>
            <Button onClick={() => {
                //@ts-ignore
                input.current.click()
            }}>
                Загрузить
                <input ref={input} type={"file"} hidden onInput={(e) => { // @ts-ignore
                    setImage(URL.createObjectURL(e.target.files[0]))
                }}/>
            </Button>
        </div>

    );
});

export default FileInput;