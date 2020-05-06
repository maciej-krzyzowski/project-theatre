import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCog } from "@fortawesome/free-solid-svg-icons";

class Navigation extends React.Component {
    state = { open: false };

    handleClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { cart } = this.props;
        return (
            <div className={styles.header}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to="/theatre/" className={styles.logo}>
                            <span className={styles.decoration}>t</span>heatre
                            <span className={styles.decoration}>.</span>
                        </Link>
                        {window.innerWidth <= 1024 ? (
                            <HamburgerMenu
                                className={styles.hamburger}
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
                        <ul
                            onClick={window.innerWidth <= 1024 ? this.handleClose : null}
                            className={`${styles.list} ${this.state.open && styles.listActvie}`}
                        >
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    exact
                                    activeClassName={styles.active}
                                    to="/theatre/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/spectacles"
                                >
                                    Spectacles
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/cart"
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} />{" "}
                                    <span>{cart.length}</span>
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/log"
                                >
                                    <FontAwesomeIcon icon={faUserCog} />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Navigation);
