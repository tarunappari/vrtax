"use client";
import React from "react";
import styles from "@/styles/contact/ContactHero.module.scss";
import { motion } from "framer-motion";

const ContactHero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.badge}>
          <span>CONTACT</span>
        </div>
        <h1 className={styles.title}>Get in Touch with Our Tax Experts</h1>
        <p className={styles.description}>
          Have questions about your personal or business taxes? Our team is here
          to provide clear guidance, secure support, and dependable solutions
          tailored to your needs.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
