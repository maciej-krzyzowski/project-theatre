import React, { Component } from "react";
import styles from "./Amount.module.scss";
import Button from "../../Button/Button";

class Amount extends Component {
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
        const { amount, minAmount, maxAmount } = this.state;
        const { price } = this.props;
        return (
            <>
                <p className={styles.price}>Cena: {price * amount}$</p>
                <div className={styles.wrapper}>
                    <button
                        disabled={amount > minAmount ? false : true}
                        className={styles.button}
                        onClick={this.handleSubtract}
                    >
                        -
                    </button>
                    <p className={styles.amount}>{amount}</p>
                    <button
                        disabled={amount < maxAmount ? false : true}
                        className={styles.button}
                        onClick={this.handleAdd}
                    >
                        +
                    </button>
                </div>
                <Button>KUP BILET!</Button>
            </>
        );
    }
}

export default Amount;
