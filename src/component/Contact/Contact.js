import React from "react";
import styles from "./Contact.module.scss";
import Map from "./Map/Map";
import Container from "../Container/Container";
import Form from "./Form/Form";

const Contact = () => {
    return (
        <Container>
            <div className={styles.contactWrapper}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.wrapper}>
                    <Map />
                    <div className={styles.contact}>
                        <div className={styles.date}>
                            <p>Theatre.</p>
                            <p>ul. rondo ONZ 1</p>
                            <p>00-124 Warszawa</p>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
