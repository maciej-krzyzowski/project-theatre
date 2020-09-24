import React from "react";
import styles from "./Contact.module.scss";
import Navigation from '../Navigation/Navigation'
import Map from "./Map/Map";
import Form from "./Form/Form";

const Contact = () => (
    <>
        <Navigation />
        <div className={styles.contactWrapper}>
            <h1 className={styles.title}>Kontakt</h1>
            <div className={styles.wrapper}>
                <Map />
                <div className={styles.contact}>
                    <Form />
                    <div className={styles.date}>
                        <p>Theatre.</p>
                        <p>ul. Rondo ONZ 1</p>
                        <p>00-124 Warszawa</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Contact;
