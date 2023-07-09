import {makeAutoObservable} from "mobx";
import {IArticle} from "../types/types";

class Articles {

    private _articles: IArticle[] = []

    constructor() {
        makeAutoObservable(this)
    }

    get articles() {
        return this._articles
    }

    addArticle(article: IArticle) {
        this._articles.unshift(article)
    }

    removeArticle(id: number) {
        this._articles = this._articles.filter(article => article.id !== id)
    }

    editArticle(id: number | undefined, article: { title: string, content: string, img: string | undefined }) {
        if (!id) return;
        const ind = this._articles.findIndex(art => art.id === id)
        Object.assign(this._articles[ind], article)
    }

    likeArticle(id: number | undefined) {
        if (!id) return;
        const ind = this._articles.findIndex(art => art.id === id)
        this._articles[ind].liked = !this._articles[ind].liked
    }

    loadArticles() {
        this._articles.push(
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: true,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: require('../images/cat.jpg'),
                liked: false,
                published: new Date().toDateString(),
            },
        )
    }

    getById(id: number) {
        return this._articles.find(article => article.id === id)
    }

}

export default new Articles()