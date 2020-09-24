import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Cart.module.scss";
import Navigation from '../Navigation/Navigation'
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import {
    removeItemFromCart as removeItemFromCartAction,
    emptyCart as emptyCartAction,
} from "../../actions/index";

class Cart extends Component {
    state = {
        cartLenght: [],
        clicked: false,
        finalPrice: 0,
    };

    componentDidMount() {
        this.updatePrice();
    }

    componentDidUpdate() {
        if (this.state.cartLenght !== this.props.cart.length) {
            this.updatePrice();
        }
    }

    handleOrder = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
        this.props.emptyCart();
    };

    handleClose = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
    };

    updatePrice = () => {
        const { cart } = this.props;

        let price = 0;
        for (let i = 0; i < cart.length; i++) {
            price = price + cart[i].price * cart[i].amount;
        }
        this.setState({
            cartLenght: cart.length,
            finalPrice: price,
        });
    };

    render() {
        const { clicked, finalPrice } = this.state;
        const { cart, removeItemFromCart } = this.props;
        return (
            <>
                <Navigation />
                <div className={styles.cart}>
                    <h1 className={styles.title}>Koszyk</h1>
                    {cart.length ? (
                        cart.map((element) => (
                            <div className={styles.wrapper} key={element.id}>
                                <img
                                    className={styles.img}
                                    src={element.image}
                                    alt={element.title}
                                />
                                <h2 className={styles.spectaclesTitle}>{element.title}</h2>
                                <p className={styles.price}>
                                    {element.price} PLN x {element.amount}
                                </p>
                                <ButtonIcon
                                    style={styles.buttonRemove}
                                    onClick={() => removeItemFromCart(element.id)}
                                >
                                    <i className="fas fa-times"></i>
                                </ButtonIcon>
                            </div>
                        ))
                    ) : (
                            <p className={styles.empty}>Koszyk jest pusty</p>
                        )}
                    <div className={styles.summary}>
                        <p className={styles.order}>Do zapłaty: {finalPrice}PLN</p>
                        <Button onClick={this.handleOrder}>KUPUJE</Button>
                    </div>
                </div>
                {clicked && <Modal handleClose={this.handleClose} text="Potwierdzenie zakupu" />}
            </>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (id) => dispatch(removeItemFromCartAction(id)),
    emptyCart: () => dispatch(emptyCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
