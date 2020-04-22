import React, { Component } from "react";
import styles from "./Form.module.scss";
import Button from "../../Button/Button";

class Form extends Component {
    state = {};
    render() {
        return (
            <form className={styles.form}>
                <h2 className={styles.title}>Napisz do nas!</h2>
                <input className={styles.input} type="text" placeholder="Imię i nazwisko"></input>
                <input className={styles.input} type="email" placeholder="Email"></input>
                <textarea className={styles.textarea} placeholder="Wpisz wiadmość..." />
                <Button type="submit">Wyślij</Button>
            </form>
        );
    }
}

export default Form;
