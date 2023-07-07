import React, {FC} from 'react';
import styles from './Button.module.scss'

interface IButton {
    className?: string,
    children: React.ReactNode,
    onClick: () => void,
}

const Button: FC<IButton> = ({className = "", children, onClick}) => {
    return (
        <button
            className={`${className} ${styles.btn}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;