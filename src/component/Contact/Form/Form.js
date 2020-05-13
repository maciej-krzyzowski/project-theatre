import React, { Component } from "react";
import styles from "./Form.module.scss";
import Button from "../../Button/Button";

class Form extends Component {
    state = {
        fullName: "",
        email: "",
        text: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        this.setState({
            fullName: "",
            email: "",
            text: "",
        });
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { fullName, email, text } = this.state;
        return (
            <form className={styles.form}>
                <h2 className={styles.title}>Napisz do nas!</h2>
                <input
                    onChange={this.handleChange}
                    className={styles.input}
                    name="fullName"
                    type="text"
                    placeholder="Imię i nazwisko"
                    value={fullName}
                />
                <input
                    onChange={this.handleChange}
                    className={styles.input}
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                />
                <textarea
                    onChange={this.handleChange}
                    className={styles.textarea}
                    name="text"
                    placeholder="Wpisz wiadmość..."
                    value={text}
                />
                <Button onClick={this.handleSubmit}>Wyślij</Button>
            </form>
        );
    }
}

export default Form;
