import React from "react";
import styles from "./ButtonIcon.module.scss";

const ButtonIcon = ({ style, onClick, children }) => {
    return (
        <button className={`${styles.icon} ${style}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonIcon;
