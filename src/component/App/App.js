import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import List from "../List/List";
import Contact from "../Contact/Contact";

const App = () => {
    return (
        <Router>
            <div className={styles.wrapper}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/spectacles" component={List} />
                    <Route path="/spectacles/:id" component={List} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
