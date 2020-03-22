import React, { Component } from 'react';
import './Home.scss';
import Container from '../Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
    caruselElements = [
        {
            id: 1,
            title: "Prawnicy",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "https://teatr6pietro.pl/wp-content/uploads/2018/10/cover_www_ucho_prezesa-poprawione.jpg"
        },
        {
            id: 2,
            title: "Milość w NY",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "https://teatr6pietro.pl/wp-content/uploads/2019/08/Miłość_w_Saybrook_slider.jpg"
        },
        {
            id: 3,
            title: "Wygrani",
            subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "https://teatr6pietro.pl/wp-content/uploads/2019/10/Projekt-bez-tytułu-10.png"
        }
    ]

    render() {
        const caruselElement = this.caruselElements.map(element =>
            <Carousel.Item key={element.id}>
                <img
                    className="d-block w-100"
                    src={element.img}
                    alt={element.title}
                />
                <div className="caption">
                    <Container>
                        <div className="caption__wrapper">
                            <h3 className="caption__title">{element.title}</h3>
                            <p className="caption__subtitle">{element.subtitle}</p>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
        )

        return (
            <div className="component">
                <Carousel className="" interval="3000" >
                    {caruselElement}
                </Carousel >
            </div>
        )
    }
}

export default Home;