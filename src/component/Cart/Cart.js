import React, { Component } from "react";
import styles from "./Cart.module.scss";

class Cart extends Component {
    state = {};
    render() {
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Cart</h1>
            </div>
        );
    }
}

export default Cart;
