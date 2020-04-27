import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Spectacles from "../Spectacles/Spectacles";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Router besname="/theatre">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/spectacles" component={Spectacles} />
                    <Route path="/spectacle/:id" component={Spectacles} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
