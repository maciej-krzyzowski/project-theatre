import React, { Component } from 'react';
import './Header.scss';
import Container from '../Container/Container'

class Header extends Component {
    state = {}
    render() {
        return (
            <header className="header">
                <Container>
                    <div className="wrapper">
                        <div>
                            <a href="/" className="logo"><span className="color__decoration">t</span>heatre<span className="color__decoration">.</span></a>
                        </div>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;