import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = ({ handleClose, text }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.wrapper}>
                <p className={styles.confirmation}>
                    {text} <i className={`fas fa-check-circle ${styles.icon}`}></i>
                </p>
                <Button onClick={handleClose}>Zamknij</Button>
            </div>
        </div>
    );
};

export default Modal;
