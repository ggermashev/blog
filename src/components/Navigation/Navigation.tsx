import React, {FC} from 'react';
import styles from './Navigation.module.scss'
import {useNavigate} from "react-router-dom";

interface ILink {
    to: string,
    children: React.ReactNode,
}

const Link: FC<ILink> = ({to, children}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.link} onClick={() => {navigate(to)}}>{children}</div>
    )
}

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.left}>
                <Link to={"/articles"}>Статьи</Link>
                <Link to={"/add-article"}>Добавить</Link>
            </div>
            <div className={styles.right}>
                <Link to={"/auth"}>Вход</Link>
            </div>
        </div>
    );
};

export default Navigation;