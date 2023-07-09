import React, {useEffect, useState} from 'react';
import styles from './Article.module.scss'
import ReplyIcon from '@mui/icons-material/Reply';
import {Params, useNavigate, useParams} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import articles from "../../store/Articles";
import {IArticle} from "../../types/types";

const Article = observer( () => {

    const navigate = useNavigate()

    const params = useParams()

    const [article, setArticle] = useState({} as IArticle | undefined)

    useEffect(() => {
        setArticle(params.id ? articles.getById(+params.id) : {} as IArticle)
    }, [])

    return (
        <div className={styles.article}>
            <ReplyIcon className={styles.back} onClick={() => {navigate(-1)}}/>
            <div className={styles.wrap}>
                <h1>
                    <FavoriteIcon
                        style={{color: article?.liked ? "red" : "black"}} className={styles.like}
                        onClick={() => {articles.likeArticle(article?.id)}}
                    />
                    {article?.title}
                    <EditIcon className={styles.edit}/> </h1>
                <img src={article?.img}/>
                <p>{article?.content}</p>
            </div>
        </div>
    );
});

export default Article;