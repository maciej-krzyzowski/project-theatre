import React from "react";
import styles from "./Navigation.module.scss";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login as loginAction } from "../../actions/index";
import Container from "../Container/Container";
import HamburgerMenu from "react-hamburger-menu";

class Navigation extends React.Component {
    state = { isOpen: false };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    handleClose = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        const { cart, isLogged } = this.props;
        return (
            <div className={styles.header}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to="/theatre/" className={styles.logo}>
                            <span className={styles.decoration}>t</span>heatre
                            <span className={styles.decoration}>.</span>
                        </Link>
                        {window.innerWidth <= 1024 && (
                            <HamburgerMenu
                                className={styles.hamburger}
                                isOpen={this.state.isOpen}
                                menuClicked={this.handleClick}
                                width={30}
                                height={20}
                                strokeWidth={1}
                                rotate={0}
                                color="#ff6b6b"
                                borderRadius={1}
                                animationDuration={0.5}
                            />
                        )}
                        <ul
                            onClick={window.innerWidth <= 1024 ? this.handleClose : null}
                            className={`${styles.list} ${this.state.isOpen && styles.listActvie}`}
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
                                    Spektakle
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/contact"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/theatre/cart"
                                >
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>{cart.length}</span>
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to={isLogged ? "/theatre/admin" : "/theatre/login"}
                                >
                                    <i className="fas fa-users-cog"></i>
                                </NavLink>
                            </li>
                            {isLogged && (
                                <li className={styles.element}>
                                    <NavLink
                                        className={styles.link}
                                        activeClassName={styles.active}
                                        to="/theatre/login"
                                        onClick={this.props.login}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ cart, isLogged }) => ({ cart, isLogged });

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
