import React, {useCallback, useEffect} from 'react';
import styles from './Articles.module.scss'
import articles from "../../store/Articles";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import {observer} from "mobx-react-lite";

const Articles = observer(() => {

    const onVisible = useCallback((isVisible: boolean) => {
        if (isVisible) {
            articles.loadArticles()
        }
    }, [])

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };
        let observer = new IntersectionObserver(entry => {
            onVisible(entry[0].isIntersecting)
        }, options);
        observer.observe(document.querySelector(`#border`) as Element)

        return () => {
            observer.disconnect()
        }

    }, [])

    return (
        <div className={styles.articles}>
            <div className={styles.wrap}>
                {articles.articles.map(article => <ArticleCard
                    article={article}
                    onLike={id => articles.likeArticle(id)}
                />)}
            </div>
            <div id={"border"} className={styles.border}>

            </div>
        </div>
    );
});

export default Articles;