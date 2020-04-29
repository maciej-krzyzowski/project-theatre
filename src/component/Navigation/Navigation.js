import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import HamburgerMenu from "react-hamburger-menu";

class Navigation extends React.Component {
    state = { open: false };

    handleClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <div className={styles.header}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to="/" className={styles.logo}>
                            <span className={styles.decoration}>t</span>heatre
                            <span className={styles.decoration}>.</span>
                        </Link>
                        {window.innerWidth <= 1024 ? (
                            <HamburgerMenu
                                isOpen={this.state.open}
                                menuClicked={this.handleClick}
                                width={30}
                                height={20}
                                strokeWidth={1}
                                rotate={0}
                                color="#ff6b6b"
                                borderRadius={1}
                                animationDuration={0.5}
                            />
                        ) : null}
                        <ul className={`${styles.list} ${this.state.open && styles.listActvie}`}>
                            <li className={styles.element}>
                                <NavLink exact activeClassName={styles.active} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink activeClassName={styles.active} to="/spectacles">
                                    Spectacles
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink activeClassName={styles.active} to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Navigation;
