import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "../Container/Container";
import Home from "../Home/Home";
import Spectacles from "../Spectacles/Spectacles";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Router basename="/theatre/">
                <Route exact path="/" component={Home} />
                <Container>
                    <Route exact path="/spectacles/" component={Spectacles} />
                    <Route path="/spectacles/:id" component={Spectacles} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                </Container>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
