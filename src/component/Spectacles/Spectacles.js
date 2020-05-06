import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Spectacles.module.scss";
import List from "./List/List";
import { filteredList as filteredListAction } from "../../actions/index";

class Spectacles extends Component {
    state = {
        spectacles: this.props.spectacles,
        search: "",
    };

    handleChange = (e) => {
        const { value } = e.target;
        const { spectacles, filteredList } = this.props;

        this.setState({
            search: value,
            spectacles: spectacles,
        });

        filteredList(value);
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

const mapDispatchToProps = (dispatch) => ({
    filteredList: (text) => dispatch(filteredListAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Spectacles);
