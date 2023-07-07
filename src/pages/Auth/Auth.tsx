import React, {useState} from 'react';
import styles from './Auth.module.scss'
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

const Auth = () => {

    const [mode, setMode] = useState("Вход")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    return (
        <div className={styles.auth}>
            <div className={styles.authForm}>
                <h3>{mode}</h3>
                <TextInput title={"Логин"} value={login} setValue={setLogin}/>
                <TextInput title={"Пароль"} value={password} setValue={setPassword}/>
                <Button onClick={() => {navigate('/articles')}}>Войти</Button>
            </div>
        </div>
    );
};

export default Auth;