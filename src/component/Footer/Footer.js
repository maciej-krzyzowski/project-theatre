import React from "react";
import styles from "./Footer.module.scss";
import Container from "./../Container/Container";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>
                    <i className="fas fa-copyright"></i>
                    2020 Maciej Krzyżowski
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
