import React, { Component } from "react";
import styles from "./AdminList.module.scss";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import AdminModal from "../AdminModal/AdminModal";
import { removeSpectacle as removeSpectacleAction } from "../../../actions/index";
import { connect } from "react-redux";

class AdminList extends Component {
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
        const { id, image, title, director, description, price, removeSpectacle } = this.props;
        const { isOpen } = this.state;
        return (
            <>
                <div key={id} className={styles.spectacles}>
                    <img className={styles.img} src={image} alt={title} />
                    <div className={styles.buttons}>
                        <ButtonIcon style={styles.button} onClick={this.handleClick}>
                            <i className="fas fa-edit"></i>
                        </ButtonIcon>
                        <ButtonIcon style={styles.button} onClick={() => removeSpectacle(id)}>
                            <i className="fas fa-times"></i>
                        </ButtonIcon>
                    </div>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.director}>{director}</p>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.price}>Cena: {price}PLN</p>
                    </div>
                </div>
                {isOpen && (
                    <AdminModal
                        edit
                        handleClose={this.handleClose}
                        id={id}
                        title={title}
                        image={image}
                        director={director}
                        description={description}
                        price={price}
                    />
                )}
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeSpectacle: (id) => dispatch(removeSpectacleAction(id)),
});

export default connect(null, mapDispatchToProps)(AdminList);
