import React, {FC} from 'react';
import styles from './ArticleCard.module.scss'
import {IArticle} from "../../types/types";

interface IArticleCard {
    article: IArticle
}

const ArticleCard: FC<IArticleCard> = ({article}) => {
    return (
        <div className={styles.wrap}>
            <h3>{article.title}</h3>
            <div className={styles.articleCard}>

            </div>
        </div>
    );
};

export default ArticleCard;