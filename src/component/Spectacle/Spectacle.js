import React from "react";
import styles from "./Spectacle.module.scss";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

const Home = ({ title, description, director, image, price }) => {
    const spectacles = {
        id: 0,
        title: "Upiór w kuchni",
        image: "https://ebilet-media.azureedge.net/media/36452/up900x507450.jpg",
        description:
            "Morderstwo doskonałe podobno nie istnieje, ale próbować warto, bo kto by podejrzewał dystyngowaną angielską damę i jej sympatyczną córkę o zakopywanie kolejnych ofiar w piwnicy? Uruchamiając całą machinę teatralnej iluzji, wykreujemy niezwykłą surrealistyczną przestrzeń pełną niespodzianek, nowatorskich rozwiązań scenograficznych i zaskakujących zwrotów akcji, których nie powstydziliby się mistrzowie filmów grozy.",
        director: "Tomasz Sapryk",
        price: "100$",
    };
    return (
        <>
            <Navigation />
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.img}>
                        <img src={spectacles.image} alt="dupa" />
                        <p className={styles.price}>Price: {spectacles.price}</p>
                        <Button>KUP BILET</Button>
                    </div>
                    <div className={styles.caption}>
                        <h1 className={styles.title}>{spectacles.title}</h1>
                        <p className={styles.director}>{spectacles.director}</p>
                        <p className={styles.description}>{spectacles.description}</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
