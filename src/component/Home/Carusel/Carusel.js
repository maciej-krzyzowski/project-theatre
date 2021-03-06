import React from "react";
import styles from "./Carusel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.scss";
import { caruselSettings, caruselElements } from "../../../data/carusel";


const Carusel = () => (
    <Slider {...caruselSettings}>
        {caruselElements.map((element) => (
            <div className={styles.wrapper} key={element.id}>
                <img src={element.img} alt={element.title} />
                <div className={styles.caption}>
                    <div className={styles.caption__wrapper}>
                        <h3 className={styles.title}>{element.title}</h3>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
);

export default Carusel;
