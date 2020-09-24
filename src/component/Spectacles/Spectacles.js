import React, { Component } from "react";
import styles from "./Spectacles.module.scss";
import Navigation from '../Navigation/Navigation'
import List from "./List/List";
import { connect } from "react-redux";

class Spectacles extends Component {
    state = {
        search: "",
        spectacles: this.props.spectacles,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = (e) => {
        const { value } = e.target;
        const search = value.toLowerCase();
        let filterList = this.props.spectacles;

        if (value.length > 1) {
            filterList = this.state.spectacles.filter((spectacle) =>
                spectacle.title.toLowerCase().includes(search)
            );
        }

        this.setState({
            search: value,
            spectacles: filterList,
        });
    };

    handleSort = (e) => {
        if (e.target.id === "title") {
            this.setState({
                spectacles: this.state.spectacles.sort((a, b) =>
                    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                ),
            });
        }

        if (e.target.id === "price") {
            this.setState({
                spectacles: this.state.spectacles.sort((a, b) => (a.price > b.price ? 1 : -1)),
            });
        }
    };
    r;
    render() {
        const { spectacles } = this.state;
        return (
            <>
                <Navigation />
                <div className={styles.spectacles} id={'spectacles'}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>Spektakle</h1>
                        <div className={styles.filtrWrapper}>
                            <button id="title" className={styles.filterBtn} onClick={this.handleSort}>
                                Filtruj A-Z
                        </button>
                            <button id="price" className={styles.filterBtn} onClick={this.handleSort}>
                                Filtruj cene rosnąco
                        </button>
                            <input
                                className={styles.search}
                                type="search"
                                placeholder="Search..."
                                value={this.state.search}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        {spectacles.map((spectacle) => (
                            <List
                                key={spectacle.id}
                                title={spectacle.title}
                                description={spectacle.description}
                                image={spectacle.image}
                                director={spectacle.director}
                                price={spectacle.price}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ spectacles }) => ({ spectacles });

export default connect(mapStateToProps)(Spectacles);
