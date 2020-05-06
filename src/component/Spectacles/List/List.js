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
        maxAmount: 9,
        minAmount: 1,
        clicked: false,
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
            clicked: true,
        });
    };

    handleClose = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
    };

    render() {
        const { title, description, director, image, price } = this.props;
        const { amount, minAmount, maxAmount, clicked } = this.state;
        const { handleAddItemToCart } = this;

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
                            min={minAmount}
                            max={maxAmount}
                            add={this.handleAdd}
                            subtract={this.handleSubtract}
                        />
                        <Button onClick={() => handleAddItemToCart(title, image, price, amount)}>
                            KUP BILET!
                        </Button>
                    </div>
                </div>
                {clicked ? (
                    <Modal handleClose={this.handleClose} text="Dodano do koszyka!" icon="true" />
                ) : null}
            </NavLink>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (title, image, price, amount) =>
        dispatch(addItemToCartAction(title, image, price, amount)),
});

export default connect(null, mapDispatchToProps)(List);
