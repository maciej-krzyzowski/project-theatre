import React, { Component } from "react";
import styles from "./List.module.scss";
import { connect } from "react-redux";
import { addItemToCart as addItemToCartAction } from "../../../actions/index";
import { NavLink } from "react-router-dom";
import Amount from "../Amount/Amount";
import Button from "../../Button/Button";

class List extends Component {
    state = {
        amount: 1,
        maxAmount: 9,
        minAmount: 1,
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

    render() {
        const { title, description, director, image, price, addItemToCart } = this.props;
        const { amount, minAmount, maxAmount } = this.state;

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
                        <Button
                            onClick={() => {
                                addItemToCart(title, image, price, amount);
                                alert("Dodano do koszyka!");
                            }}
                        >
                            KUP BILET!
                        </Button>
                    </div>
                </div>
            </NavLink>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (title, image, price, amount) =>
        dispatch(addItemToCartAction(title, image, price, amount)),
});

export default connect(null, mapDispatchToProps)(List);
