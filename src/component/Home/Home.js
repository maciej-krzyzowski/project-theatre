import React, { Component } from "react";
import styles from "./Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.scss";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

class Home extends Component {
    caruselElements = [
        {
            id: 1,
            title: "Ucho Prezesa",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img:
                "https://teatr6pietro.pl/wp-content/uploads/2018/10/cover_www_ucho_prezesa-poprawione.jpg",
        },
        {
            id: 2,
            title: "Milość w NY",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "https://teatr6pietro.pl/wp-content/uploads/2019/08/Miłość_w_Saybrook_slider.jpg",
        },
        {
            id: 3,
            title: "Wygrani",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "https://teatr6pietro.pl/wp-content/uploads/2019/10/Projekt-bez-tytułu-10.png",
        },
    ];

    render() {
        const settings = {
            dots: true,
            arrows: window.innerWidth <= 1024 ? false : true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 750,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const caruselElement = this.caruselElements.map((element) => (
            <div className={styles.wrapper} key={element.id}>
                <img src={element.img} alt={element.title} />
                <div className={styles.caption}>
                    <div className={styles.caption__wrapper}>
                        <h3 className={styles.title}>{element.title}</h3>
                    </div>
                </div>
            </div>
        ));

        return (
            <>
                <Navigation />
                <div className={styles.carusel}>
                    <Slider {...settings}>{caruselElement}</Slider>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;
