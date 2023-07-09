import React, {useState} from 'react';
import styles from './AddArticle.module.scss'
import TextInput from "../../components/TextInput/TextInput";
import FileInput from "../../components/FileInput/FileInput";
import Button from "../../components/Button/Button";
import articles from "../../store/Articles";
import {useNavigate} from "react-router-dom";

const AddArticle = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState<string>()

    const navigate = useNavigate()

    return (
        <div className={styles.addArticle}>
            <TextInput title={"Название"} value={title} setValue={setTitle}/>
            <FileInput image={image} setImage={setImage}/>
            <TextInput title={"Содержание"} value={content} setValue={setContent} multiline={true}/>
            <Button onClick={() => {
                articles.addArticle({
                    id: Math.round(Math.random() * 1e6),
                    title,
                    content,
                    img: image,
                    liked: false,
                    published: new Date().toDateString(),
                })
                navigate('/articles')
            }}>Опубликовть</Button>
        </div>
    );
};

export default AddArticle;