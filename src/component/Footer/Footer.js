import React from "react";
import styles from "./Footer.module.scss";
import Container from "./../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>
                    <FontAwesomeIcon icon={faCopyright} />
                    2020 Maciej Krzyżowski
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
