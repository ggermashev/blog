import React from 'react';
import Footer from "./components/Footer/Footer";
import styles from './App.module.scss'
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Articles from "./pages/Articles/Articles";
import Auth from "./pages/Auth/Auth";
import AddArticle from "./pages/AddArticle/AddArticle";
import Article from "./pages/Article/Article";


function App() {
    return (
        <div className={styles.app}>
            <main>
                <Navigation/>
                <Routes>
                    <Route path={"/articles"} element={<Articles/>}/>
                    <Route path={"/article/:id"} element={<Article/>}/>
                    <Route path={"/add-article"} element={<AddArticle/>}/>
                    <Route path={"/auth"} element={<Auth/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
