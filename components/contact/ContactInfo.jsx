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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={styles.container}>
      {contactData.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={styles.card}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
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
    </div>
  );
};

export default ContactInfo;

