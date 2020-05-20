import React, { Component } from "react";
import styles from "./Admin.module.scss";
import { connect } from "react-redux";
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
                    <ButtonIcon style={styles.buttonAdd} onClick={this.handleClick}>
                        <i className="fas fa-plus"></i>
                    </ButtonIcon>
                </div>
                {spectacles.map((spectacle) => (
                    <AdminList
                        key={spectacle.id}
                        id={spectacle.id}
                        image={spectacle.image}
                        title={spectacle.title}
                        director={spectacle.director}
                        description={spectacle.description}
                        price={spectacle.price}
                    />
                ))}
                {isOpen && <AdminModal handleClose={this.handleClose} />}
            </div>
        );
    }
}

const mapStateToProps = ({ spectacles }) => ({ spectacles });

export default connect(mapStateToProps)(Admin);
