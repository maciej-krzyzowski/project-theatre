import React from 'react';
import './Footer.scss';
import Container from './../Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <p>
                        <FontAwesomeIcon icon={faCopyright} /> 
                        2020 Maciej Krzyżowski
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;