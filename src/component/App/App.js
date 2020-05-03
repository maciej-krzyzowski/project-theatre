import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Spectacles from "../Spectacles/Spectacles";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Router besname="/theatre">
                <Navigation />
                <AnimatedSwitch
                    atEnter={{ opacity: 0.7 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                >
                    <Route exact path="/" component={Home} />
                    <Container>
                        <Route exact path="/spectacles/" component={Spectacles} />
                        <Route path="/spectacles/:id" component={Spectacles} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/cart" component={Cart} />
                    </Container>
                </AnimatedSwitch>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
