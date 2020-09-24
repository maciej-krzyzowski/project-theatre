import React from "react";
import { connect } from "react-redux";
import styles from "./Home.module.scss";
import Navigation from '../Navigation/Navigation';
import Carusel from './Carusel/Carusel';
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Home = ({ spectacles }) => {
    const images = spectacles.filter(spectacle => spectacle.id < 10)
    return (
        <div className={styles.home}>
            <Navigation />
            <Carusel />
            <Container>
                <div className={styles.tiles}>
                    <Link to="/spectacles/" className={styles.button}>KUP BILET</Link>
                    <Link to="/contact" className={styles.button}>SKONTAKTUJ SIĘ Z NAMI</Link>
                </div>
                <div className={styles.openingHours}>
                    <p className={styles.opening}>GODZINY OTWARCIA BIURA</p>
                    <p className={styles.date}>PON-SOB 10-18</p>
                </div>
                <h2 className={styles.title}>GALERIA</h2>
                <div className={styles.gallery}>
                    {images.map((img) => (
                        <div className={styles.wrapperImg} key={img.id}>
                            <img
                                src={img.image}
                                className={styles.img}
                                alt={img.title}
                            />
                        </div>
                    ))}
                </div>
            </Container >
        </div >
    )
};

const mapStateToProps = ({ spectacles }) => ({ spectacles });

export default connect(mapStateToProps)(Home);
