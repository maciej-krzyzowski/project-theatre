import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./List.module.scss";
import Amount from "../Amount/Amount";

class List extends Component {
    render() {
        const { title, description, director, image, price } = this.props;
        return (
            <NavLink
                to={`/spectacles/${title}`}
                className={styles.spectacles}
                activeClassName={styles.active}
            >
                <img className={styles.img} src={image} alt={title} />
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.director}>{director}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.amountActive}>
                        <p className={styles.price}>Cena: {price}$</p>
                        <Amount />
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default List;
