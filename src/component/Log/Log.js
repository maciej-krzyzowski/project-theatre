import React, { Component } from "react";
import styles from "./Log.module.scss";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

class Log extends Component {
    state = {
        text: "",
        password: "",
        isLog: false,
        isActive: false,
    };

    handleChange = (e) => {
        const { type, value } = e.target;
        this.setState({
            [type]: value,
        });
    };

    handleLogIn = (e) => {
        e.preventDefault();
        const { text, password } = this.state;
        if (text === "admin" && password === "admin123") {
            this.setState({
                isLog: true,
            });
        } else {
            this.setState({
                isActive: true,
            });
        }
    };

    handleClose = () => {
        this.setState({
            isActive: false,
        });
    };

    render() {
        const { text, password, isLog, isActive } = this.state;
        if (isLog) {
            return <Redirect to="/theatre/admin" />;
        }
        return (
            <div className={styles.log}>
                <h1 className={styles.title}>Zaloguj się do Panelu Administracyjnego</h1>
                <div className={styles.wrapper}>
                    <form className={styles.form}>
                        <h2 className={styles.subtitle}>Podaj dane:</h2>
                        <input
                            onChange={this.handleChange}
                            className={styles.input}
                            type="text"
                            placeholder="Identyfikator"
                            value={text}
                        />
                        {0 < text.length && text.length < 5 ? (
                            <p className={styles.warning}>
                                Identyfikator musi zawierac min 5 znaków.
                            </p>
                        ) : null}
                        <input
                            onChange={this.handleChange}
                            className={styles.input}
                            type="password"
                            placeholder="Hasło"
                            value={password}
                        />
                        {0 < password.length && password.length < 8 ? (
                            <p className={styles.warning}>Hasło musi zawierac min 8 znaków.</p>
                        ) : null}
                        <Button onClick={(e) => this.handleLogIn(e)}>Zaloguj</Button>
                        <p className={styles.data}>
                            Wpisz poniższe dane, żeby sie zalogować się do panelu administracyjnego:
                            <br />
                            Identyfikator: admin
                            <br />
                            Hasło: admin123
                        </p>
                    </form>
                </div>
                {isActive ? (
                    <Modal
                        handleClose={this.handleClose}
                        text="Podałeś złe hasło, spróbuj jeszcze raz!"
                    />
                ) : null}
            </div>
        );
    }
}

export default Log;
