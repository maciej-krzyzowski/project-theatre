import React, { Component } from "react";
import styles from "./List.module.scss";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ListElement from "./ListElement/ListElement";
import Container from "../Container/Container";
import Data from "../../Data/date";

class List extends Component {
    state = {
        spectacles: [],
    };

    componentDidMount() {
        this.setState({
            spectacles: [...Data.spectacles],
        });
    }

    render() {
        const Spectacles = this.state.spectacles.map((spectacle) => (
            <ListElement
                key={spectacle.id}
                title={spectacle.title}
                description={spectacle.description}
                image={spectacle.image}
                director={spectacle.director}
                price={spectacle.price}
            />
        ));
        return (
            <>
                <Navigation />
                <Container>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>SPECTACLES</h1>
                        <div className={styles.wrapper}>{Spectacles}</div>
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}

export default List;
