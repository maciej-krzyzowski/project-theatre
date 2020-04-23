import React, { Component } from "react";
import styles from "./List.module.scss";
import ListElement from "./ListElement/ListElement";
import Container from "../Container/Container";
import { spectacles } from "../../data/spectacles";

class List extends Component {
    state = {
        spectacles: [],
        search: "",
    };

    componentDidMount() {
        this.setState({
            spectacles: spectacles,
        });
    }

    handleChange = (e) => {
        const { spectacles } = this.state;
        const { value } = e.target;
        const query = value.toLowerCase();
        let filteredList = spectacles;

        if (value.length >= 3) {
            filteredList = spectacles.filter((spectacle) =>
                spectacle.title.toLowerCase().includes(query)
            );
        }

        this.setState({
            search: value,
            spectacles: filteredList,
        });
    };

    render() {
        return (
            <>
                <Container>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>SPECTACLES</h1>
                        <input
                            className={styles.search}
                            type="search"
                            placeholder="Search..."
                            value={this.state.search}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        {this.state.spectacles.map((spectacle) => (
                            <ListElement
                                key={spectacle.id}
                                title={spectacle.title}
                                description={spectacle.description}
                                image={spectacle.image}
                                director={spectacle.director}
                                price={spectacle.price}
                            />
                        ))}
                    </div>
                </Container>
            </>
        );
    }
}

export default List;
