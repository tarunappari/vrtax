"use client";
import React from "react";
import styles from "@/styles/contact/ContactSection.module.scss";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          <ContactInfo />
        </div>
        <div className={styles.rightSection}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

