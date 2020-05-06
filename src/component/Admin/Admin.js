import React, { Component } from "react";
import styles from "./Admin.module.scss";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdminModal from "./AdminModal/AdminModal";
import AdminList from "./AdminList/AdminList";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

class Admin extends Component {
    state = {
        isOpen: false,
    };

    handleClick = (e) => {
        this.setState({
            isOpen: true,
        });
    };

    handleClose = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        const { spectacles } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={styles.admin}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Panel Administracyjny</h1>
                    <ButtonIcon style={styles.buttonAdd} onClick={this.handleClick} icon={faPlus} />
                </div>
                {spectacles.map((spectacle) => (
                    <AdminList
                        id={spectacle.id}
                        image={spectacle.image}
                        title={spectacle.title}
                        director={spectacle.director}
                        description={spectacle.description}
                        price={spectacle.price}
                    />
                ))}
                {isOpen ? <AdminModal handleClose={this.handleClose} /> : null}
            </div>
        );
    }
}

const mapStateToProps = ({ spectacles }) => ({ spectacles });

export default connect(mapStateToProps)(Admin);
