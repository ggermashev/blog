import React, {FC, useState} from 'react';
import styles from './ArticleCard.module.scss'
import {IArticle} from "../../types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import TextInput from "../TextInput/TextInput";

interface IArticleCard {
    article: IArticle,
    onLike: (id: number) => void
}

const ArticleCard: FC<IArticleCard> = observer(({article, onLike}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.articleCard} onClick={() => {
            navigate(`/article/${article.id}`)
        }}>
            <div className={styles.header}>
                <h2>{article.title}</h2>
                <p>{article.published}</p>
            </div>
            <div className={styles.imgWrap}>
                <img className={styles.img} src={article.img}/>
            </div>
            <div className={styles.content}>
                <p>{article.content}</p>
            </div>
            <div className={styles.other}>
                <FavoriteIcon
                    style={{color: article.liked ? "red" : "lightgrey"}}
                    onClick={(e) => {
                        e.stopPropagation()
                        onLike(article.id)
                    }}
                />
            </div>
        </div>
    );
});

export default ArticleCard;