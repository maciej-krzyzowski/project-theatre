import React from "react";
import styles from "./Contact.module.scss";
import Map from "./Map/Map";
import Form from "./Form/Form";

const Contact = () => (
    <div className={styles.contactWrapper}>
        <h1 className={styles.title}>Kontakt</h1>
        <div className={styles.wrapper}>
            <Map />
            <div className={styles.contact}>
                <div className={styles.date}>
                    <p>Theatre.</p>
                    <p>ul. Rondo ONZ 1</p>
                    <p>00-124 Warszawa</p>
                </div>
                <Form />
            </div>
        </div>
    </div>
);

export default Contact;

