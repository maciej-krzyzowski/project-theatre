import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./List.module.scss";
import ListElement from "./ListElement/ListElement";
import Container from "../Container/Container";
import { filteredList as filteredListAction } from "../../actions/index";

class List extends Component {
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
                        {spectacles.map((spectacle) => (
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

const mapStateToProps = ({ spectacles }) => ({ spectacles });

const mapDispatchToProps = (dispatch) => ({
    filteredList: (text) => dispatch(filteredListAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
