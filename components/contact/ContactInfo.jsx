"use client";
import React from "react";
import styles from "@/styles/contact/ContactInfo.module.scss";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactData = [
    {
      icon: IconPhone,
      title: "Phone number",
      details: ["+99 0123 3654 264", "+99 0123 3644 478"],
    },
    {
      icon: IconMail,
      title: "Our email",
      details: ["hello@pentaclay.com", "hello@banki.com"],
    },
    {
      icon: IconMapPin,
      title: "Our location",
      details: ["6391 Elgin St. Celina, Delaware 10299, United States"],
    },
  ];

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={styles.container}
    >
      {contactData.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            variants={itemVariants}
            key={index}
            className={styles.card}
            custom={index}
          >
            <div className={styles.iconWrapper}>
              <Icon size={28} stroke={1.5} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.details}>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ContactInfo;
