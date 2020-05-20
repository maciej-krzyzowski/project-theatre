import React, { Component } from "react";
import styles from "./List.module.scss";
import { connect } from "react-redux";
import { addItemToCart as addItemToCartAction } from "../../../actions/index";
import { NavLink } from "react-router-dom";
import Amount from "../Amount/Amount";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";

class List extends Component {
    state = {
        amount: 1,
        isModalOpen: false,
    };

    handleSubtract = () => {
        this.setState({
            amount: this.state.amount * 1 - 1,
        });
    };

    handleAdd = () => {
        this.setState({
            amount: this.state.amount * 1 + 1,
        });
    };

    handleAddItemToCart = (title, image, price, amount) => {
        this.props.addItemToCart(title, image, price, amount);
        this.setState({
            isModalOpen: true,
        });
    };

    handleClose = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    render() {
        const { title, description, director, image, price } = this.props;
        const { amount, isModalOpen } = this.state;

        return (
            <NavLink
                to={`/theatre/spectacles/${title}`}
                className={styles.spectacles}
                activeClassName={styles.active}
            >
                <img className={styles.img} src={image} alt={title} />
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.director}>{director}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.descriptionActive}>
                        <p className={styles.price}>Cena: {price}PLN</p>
                        <Amount
                            amount={amount}
                            add={this.handleAdd}
                            subtract={this.handleSubtract}
                        />
                        <Button
                            onClick={() => this.handleAddItemToCart(title, image, price, amount)}
                        >
                            KUP BILET!
                        </Button>
                    </div>
                </div>
                {isModalOpen && <Modal handleClose={this.handleClose} text="Dodano do koszyka!" />}
            </NavLink>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (title, image, price, amount) =>
        dispatch(addItemToCartAction(title, image, price, amount)),
});

export default connect(null, mapDispatchToProps)(List);
