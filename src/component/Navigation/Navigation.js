import React from "react";
import styles from "./Navigation.module.scss";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login as loginAction } from "../../actions/index";
import Container from "../Container/Container";
import HamburgerMenu from "react-hamburger-menu";
import "../../styles/global.scss";
import styled from "styled-components";

const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.pathname === '/theatre/' ? 'none' : '#333'};
    color: #fff;
    width: 100vw;
    z-index: 1;
`;

class Navigation extends React.Component {
    state = {
        isOpen: false,
    };

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
        const { isOpen } = this.state;
        const { cart, isLogged } = this.props;
        return (
            <Header pathname={window.location.pathname}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to="/" className={styles.logo}>
                            <span className={styles.decoration}>t</span>heatre
                            <span className={styles.decoration}>.</span>
                        </Link>
                        {window.innerWidth <= 1024 && (
                            <HamburgerMenu
                                className={styles.hamburger}
                                isOpen={isOpen}
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
                            className={`${styles.list} ${isOpen && styles.listActvie}`}
                        >
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    exact
                                    activeClassName={styles.active}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/spectacles"
                                >
                                    Spektakle
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/contact"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to="/cart"
                                >
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>{cart.length}</span>
                                </NavLink>
                            </li>
                            <li className={styles.element}>
                                <NavLink
                                    className={styles.link}
                                    activeClassName={styles.active}
                                    to={isLogged ? "/admin" : "/login"}
                                >
                                    <i className="fas fa-users-cog"></i>
                                </NavLink>
                            </li>
                            {isLogged && (
                                <li className={styles.element}>
                                    <NavLink
                                        className={styles.link}
                                        activeClassName={styles.active}
                                        to="/login"
                                        onClick={this.props.login}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </Container>
            </Header>
        );
    }
}

const mapStateToProps = ({ cart, isLogged }) => ({ cart, isLogged });

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
