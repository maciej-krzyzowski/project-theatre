import React, { Component } from "react";
import styles from "./AdminModal.module.scss";
import { connect } from "react-redux";
import {
    addSpectacle as addSpectacleAction,
    editSpectacle as editSpectacleAction,
} from "../../../actions/index";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class AdminModal extends Component {
    state = {
        title: "",
        image: "",
        director: "",
        price: "",
        description: "",
        isError: false,
    };

    componentDidMount() {
        const { edit, title, image, director, price, description } = this.props;
        if (edit) {
            this.setState({
                title,
                image,
                director,
                price,
                description,
            });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleAdd = (title, image, director, description, price) => {
        const { addSpectacle, handleClose } = this.props;
        if (title === "" || image === "" || director === "" || description === "" || price === "") {
            this.setState({
                isError: true,
            });
        } else {
            addSpectacle(title, image, description, director, price);
            handleClose();
        }
    };

    handleEdit = (id, title, image, description, director, price) => {
        const { editSpectacle, handleClose } = this.props;
        if (title === "" || image === "" || director === "" || description === "" || price === "") {
            this.setState({
                isError: true,
            });
        } else {
            editSpectacle(id, title, image, description, director, price);
            handleClose();
        }
    };

    render() {
        const { title, image, director, price, description, isError } = this.state;
        const { edit, id, handleClose } = this.props;
        console.log(price);
        return (
            <div className={styles.modal}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        {edit ? "Edytuj spektal" : "Dodaj nowy spektakl"}
                    </h2>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon} onClick={handleClose} />
                    <form className={styles.form}>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Tytuł"
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="image"
                            value={image}
                            placeholder="Adres URL do zdjecia"
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="director"
                            value={director}
                            placeholder="Reżyser"
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="price"
                            value={price}
                            placeholder="Cena"
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                        <textarea
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Opis"
                            className={styles.textarea}
                            onChange={this.handleChange}
                        />
                        {isError ? (
                            <p className={styles.error}>WSZYSTKIE POLA MUSZĄ BYĆ WYPEŁNIONE!</p>
                        ) : null}
                    </form>
                    <Button
                        onClick={() => {
                            edit
                                ? this.handleEdit(id, title, image, description, director, price)
                                : this.handleAdd(title, image, director, description, price);
                        }}
                    >
                        Zapisz
                    </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addSpectacle: (title, image, director, description, price) =>
        dispatch(addSpectacleAction(title, image, director, description, price)),
    editSpectacle: (id, title, image, description, director, price) =>
        dispatch(editSpectacleAction(id, title, image, description, director, price)),
});

export default connect(null, mapDispatchToProps)(AdminModal);
