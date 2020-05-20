import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
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
            <Router basename="/theatre">
                <Navigation />
                <Route exact path="/theatre" component={Home} />
                <Container>
                    <Route exact path="/theatre/spectacles/" component={Spectacles} />
                    <Route path="/theatre/spectacles/:id" component={Spectacles} />
                    <Route path="/theatre/contact" component={Contact} />
                    <Route path="/theatre/cart" component={Cart} />
                    <Route path="/theatre/login" component={Login} />
                    <Route path="/theatre/admin" component={Admin} />
                </Container>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
