import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ handleClose, text, icon }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.wrapper}>
                <p className={styles.confirmation}>
                    {text}{" "}
                    {icon ? <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} /> : null}
                </p>
                <Button onClick={handleClose}>Zamknij</Button>
            </div>
        </div>
    );
};

export default Modal;
