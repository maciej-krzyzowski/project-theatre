import React from "react";
import styles from "./Amount.module.scss";

const Amount = ({ amount, min, max, add, subtract }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <button
                    disabled={amount > min ? false : true}
                    className={styles.button}
                    onClick={subtract}
                >
                    -
                </button>
                <p className={styles.amount}>{amount}</p>
                <button
                    disabled={amount < max ? false : true}
                    className={styles.button}
                    onClick={add}
                >
                    +
                </button>
            </div>
            {amount === max ? <p className={styles.warning}>Mozesz kupić max 9 szt.!</p> : null}
        </>
    );
};

export default Amount;
