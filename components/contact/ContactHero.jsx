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

    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
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
        <motion.div variants={itemVariants} className={styles.badge}>
          <span>CONTACT</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className={styles.title}>Get in Touch with Our Tax Experts</motion.h1>
        <motion.p variants={itemVariants} className={styles.description}>
          Have questions about your personal or business taxes? Our team is here
          to provide clear guidance, secure support, and dependable solutions
          tailored to your needs.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
