import React, {useEffect, useState} from 'react';
import styles from './Article.module.scss'
import ReplyIcon from '@mui/icons-material/Reply';
import {Params, useNavigate, useParams} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import articles from "../../store/Articles";
import {IArticle} from "../../types/types";
import TextInput from "../../components/TextInput/TextInput";
import textInput from "../../components/TextInput/TextInput";
import FileInput from "../../components/FileInput/FileInput";
import Button from "../../components/Button/Button";

const Article = observer(() => {

    const navigate = useNavigate()

    const params = useParams()

    const [article, setArticle] = useState({} as IArticle | undefined)

    const [mode, setMode] = useState<"edit" | "read">("read")
    const [title, setTitle] = useState(article?.title || "")
    const [content, setContent] = useState(article?.content || "")
    const [image, setImage] = useState(article?.img)


    useEffect(() => {
        setArticle(params.id ? articles.getById(+params.id) : {} as IArticle)
    }, [])

    useEffect(() => {
        setTitle(article?.title || "")
        setContent(article?.content || "")
        setImage(article?.img)
    }, [article])

    return (
        <div className={styles.article}>
            <ReplyIcon className={styles.back} onClick={() => {
                navigate(-1)
            }}/>
            <div className={styles.wrap}>
                <div className={styles.header}>
                    {mode === "read"
                        ? <>
                            <FavoriteIcon
                                style={{color: article?.liked ? "red" : "black"}} className={styles.like}
                                onClick={() => {
                                    articles.likeArticle(article?.id)
                                }}
                            />
                            <h1>{article?.title}</h1>
                        </>
                        : <TextInput title={"Название"} value={title} setValue={setTitle}/>
                    }
                    <EditIcon className={styles.edit}
                              style={{color: mode === "read" ? "black" : "lightblue"}}
                              onClick={() => {
                                  if (mode === "read") {
                                      setMode("edit")
                                  } else {
                                      setMode("read")
                                  }
                              }}/>
                </div>
                {mode === "read"
                    ? <img src={article?.img}/>
                    : <FileInput image={image} setImage={setImage}/>
                }
                {mode === "read"
                    ?<p>{article?.content}</p>
                    : <TextInput title={"Содержание"} value={content} setValue={setContent} multiline={true}/>

                }
                {mode === "edit" &&
                    <Button onClick={() => {
                        articles.editArticle(article?.id, {title, content, img: image})
                        setArticle(params.id ? articles.getById(+params.id) : {} as IArticle)
                        setMode("read")
                    }}>Изменить</Button>}
            </div>
        </div>
    );
});

export default Article;