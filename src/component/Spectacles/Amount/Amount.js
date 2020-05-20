import React from "react";
import styles from "./Amount.module.scss";

const Amount = ({ amount, add, subtract }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <button disabled={amount === 1} className={styles.button} onClick={subtract}>
                    -
                </button>
                <p className={styles.amount}>{amount}</p>
                <button disabled={amount === 9} className={styles.button} onClick={add}>
                    +
                </button>
            </div>
            <p className={`${styles.warning} ${amount === 9 && styles.warningActive}`}>
                Mozesz kupić max 9 szt.!
            </p>
        </>
    );
};

export default Amount;
