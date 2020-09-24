import React, { Component } from "react";
import styles from "./Login.module.scss";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login as loginAction } from "../../actions/index";
import Navigation from '../Navigation/Navigation';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

class Log extends Component {
    state = {
        text: "",
        password: "",
        showWarning: false,
    };

    handleChange = (e) => {
        const { type, value } = e.target;
        this.setState({
            [type]: value,
        });
    };

    handleTggleShowWarning = () => {
        this.setState({
            showWarning: !this.state.showWarning,
        });
    };

    handleLogIn = () => {
        const { text, password } = this.state;
        const { login } = this.props;
        if (text === "admin" && password === "admin123") {
            login();
        } else {
            this.handleTggleShowWarning();
        }
    };

    handleEnterPress = (e) => {
        if (e.key === "Enter") {
            this.handleLogIn();
        }
    };

    render() {
        const { text, password, showWarning } = this.state;
        const { isLogged } = this.props;
        if (isLogged) {
            return <Redirect to="/admin" />;
        }
        return (
            <>
                <Navigation />
                <div className={styles.log}>
                    <h1 className={styles.title}>Zaloguj się do Panelu Administracyjnego</h1>
                    <div className={styles.wrapper}>
                        <form className={styles.form} onKeyPress={(e) => this.handleEnterPress(e)}>
                            <h2 className={styles.subtitle}>Podaj dane:</h2>
                            <input
                                onChange={this.handleChange}
                                className={styles.input}
                                type="text"
                                placeholder="Identyfikator"
                                value={text}
                            />
                            {0 !== text.length && text.length < 5 && (
                                <p className={styles.warning}>
                                    Identyfikator musi zawierac min 5 znaków.
                                </p>
                            )}
                            <input
                                onChange={this.handleChange}
                                className={styles.input}
                                type="password"
                                placeholder="Hasło"
                                value={password}
                            />
                            {0 !== password.length && password.length < 8 && (
                                <p className={styles.warning}>Hasło musi zawierac min 8 znaków.</p>
                            )}
                            <Button onClick={this.handleLogIn}>Zaloguj</Button>
                            <p className={styles.data}>
                                Wpisz poniższe dane, żeby sie zalogować się do panelu administracyjnego:
                            <br />
                            Identyfikator: admin
                            <br />
                            Hasło: admin123
                        </p>
                        </form>
                    </div>
                    {showWarning && (
                        <Modal
                            handleClose={this.handleTggleShowWarning}
                            text="Podałeś złe dane."
                            witchoutIcon
                        />
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ isLogged }) => ({ isLogged });

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
