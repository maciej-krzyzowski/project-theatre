import React from "react";
import styles from "./ButtonIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ style, onClick, icon }) => {
    return (
        <button className={`${styles.icon} ${style}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default ButtonIcon;
