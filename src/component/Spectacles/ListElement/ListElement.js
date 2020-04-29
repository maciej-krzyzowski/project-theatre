import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ListElement.module.scss";
import Amount from "../Amount/Amount";

class ListElement extends Component {
    render() {
        const { title, description, director, image, price } = this.props;
        return (
            <NavLink
                to={`/spectacle/${title}`}
                className={styles.spectacles}
                activeClassName={styles.active}
            >
                <img className={styles.img} src={image} alt={title} />
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.director}>{director}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.amountActive}>
                        <Amount price={price} />
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default ListElement;
