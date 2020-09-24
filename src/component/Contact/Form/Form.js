import React, { Component } from "react";
import styles from "./Form.module.scss";
import Button from "../../Button/Button";
import styled from "styled-components";
import Modal from '../../Modal/Modal';
import "../../../styles/global.scss";

const Warning = styled.p`
    color: #942727;
    font-size: 12px;
    margin: 5px 0 15px 0;
    visibility: ${({error}) => error === true ? 'visible' : 'hidden'};
`;

class Form extends Component {
    state = {
        fullName: "",
        email: "",
        text: "",
        isError: false,
        clicked: false,
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        const { fullName, email, text } = this.state;
        if(fullName.length < 5 || !email.includes('@') || text.lenght < 50){
            this.setState({
                isError: true,
            });
        } else {
            console.log("dupa");
            this.setState({
                clicked: true,
                isError: false,
                fullName: "",
                email: "",
                text: "",
            });
        }
    };

    handleClose = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
    };

    render() {
        const { fullName, email, text, isError, clicked } = this.state;
        return (
            <>
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
                    <Warning error={isError && fullName.length < 5 ? isError : null}>Podaj min. 5 znaki.</Warning>
                    <input
                        onChange={this.handleChange}
                        className={styles.input}
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                    />
                    <Warning error={isError && !email.includes('@') ? isError : null}>Email musi zawierać "@".</Warning>
                    <textarea
                        onChange={this.handleChange}
                        className={styles.textarea}
                        name="text"
                        placeholder="Wpisz wiadmość..."
                        value={text}
                    />
                    <Warning error={isError && text.length < 50 ? isError : null}>Wiadomość musi zawierać min. 50 znaków.</Warning>
                    <Button onClick={this.handleSubmit}>Wyślij</Button>
                </form>
                {clicked && <Modal handleClose={this.handleClose} text="Wiadomość została wysłana." />}
            </>
        );
    }
}

export default Form;
