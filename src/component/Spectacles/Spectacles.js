import React, { Component } from "react";
import styles from "./Spectacles.module.scss";
import List from "./List/List";
import { connect } from "react-redux";

class Spectacles extends Component {
    state = {
        search: "",
        spectacles: this.props.spectacles,
    };

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

    render() {
        const { spectacles } = this.state;
        return (
            <div className={styles.spectacles}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Spektakle</h1>
                    <input
                        className={styles.search}
                        type="search"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
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
        );
    }
}

const mapStateToProps = ({ spectacles }) => ({ spectacles });

export default connect(mapStateToProps)(Spectacles);
