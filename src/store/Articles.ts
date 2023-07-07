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
        this._articles.push(article)
    }

    removeArticle(id: number) {
        this._articles = this._articles.filter(article => article.id !== id)
    }

    editArticle(id: number, article: IArticle) {
        const ind = this._articles.findIndex(art => art.id === id)
        this._articles[ind] = article
    }

    likeArticle(id: number) {
        const ind = this._articles.findIndex(art => art.id === id)
        this._articles[ind].liked = !this._articles[ind].liked
    }

    loadArticles() {
        this._articles.push(
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
            {
                id: Math.round(Math.random() * 1e6),
                title: "title",
                content: "content",
                img: "",
                liked: false,
                tags: []
            },
        )
    }


}

export default new Articles()