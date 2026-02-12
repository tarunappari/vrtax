"use client";
import { motion } from "framer-motion";
import styles from "@/styles/services/ServicesCardsSection.module.scss";
import {
  IconReceiptTax,
  IconId,
  IconFileInvoice,
  IconBuildingBank,
  IconCalendarTime,
  IconChartLine,
  IconCalculator,
  IconShieldCheck,
} from "@tabler/icons-react";

import taxImg from "@/public/assets/services/indi/indi1.png";
import itinImg from "@/public/assets/services/indi/indi2.png";
import prepImg from "@/public/assets/services/indi/indi3.png";
import fbarImg from "@/public/assets/services/indi/indi4.png";
import extensionImg from "@/public/assets/services/indi/indi5.png";
import planningImg from "@/public/assets/services/indi/indi6.png";
import consultantImg from "@/public/assets/services/indi/indi7.png";
import auditImg from "@/public/assets/services/indi/indi8.png";

const individualServices = [
  {
    title: "Tax Return Services",
    description:
      "Accurate filing with maximum refunds and complete compliance with IRS regulations to ensure a smooth and stress-free experience.",
    icon: <IconReceiptTax size={24} />,
    img: taxImg,
  },
  {
    title: "ITIN Processing",
    description:
      "Secure ITIN application assistance with proper documentation support to help you obtain your identification number efficiently.",
    icon: <IconId size={24} />,
    img: itinImg,
  },
  {
    title: "Tax Preparation Services",
    description:
      "Comprehensive tax preparation with expert review, accurate documentation, and timely submission for individuals and businesses.",
    icon: <IconFileInvoice size={24} />,
    img: prepImg,
  },
  {
    title: "FBAR & FATCA Processing",
    description:
      "Foreign account compliance assistance ensuring complete reporting accuracy and adherence to international tax regulations.",
    icon: <IconBuildingBank size={24} />,
    img: fbarImg,
  },
  {
    title: "Extension Filing Services",
    description:
      "File extensions before deadlines with proper documentation and avoid penalties while maintaining full regulatory compliance.",
    icon: <IconCalendarTime size={24} />,
    img: extensionImg,
  },
  {
    title: "Tax Planning & Advisory",
    description:
      "Strategic tax-saving guidance tailored to your financial goals with proactive planning and structured advisory support.",
    icon: <IconChartLine size={24} />,
    img: planningImg,
  },
  {
    title: "Tax Consultant Services",
    description:
      "Expert consultation for individuals and businesses with in-depth analysis and customized financial recommendations.",
    icon: <IconCalculator size={24} />,
    img: consultantImg,
  },
  {
    title: "Audit Representation",
    description:
      "Professional IRS audit representation support ensuring proper documentation, communication, and legal compliance.",
    icon: <IconShieldCheck size={24} />,
    img: auditImg,
  },
];

export default function ServicesCardsSection() {
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
      <div className={styles.titleSection}>
        <motion.h2 variants={itemVariants}>Our Individual Services Include</motion.h2>
        <motion.p variants={itemVariants}>
          Each return is carefully reviewed to ensure accuracy, compliance, and
          maximum eligible benefits.
        </motion.p>
      </div>
      <section className={styles.wrapper}>
        {individualServices.map((service, index) => {
          const isRight = index % 2 === 0;

          return (
            <motion.div variants={itemVariants} key={index} className={styles.card}>
              <div
                className={`${styles.cardInner} ${
                  isRight ? styles.right : styles.left
                }`}
              >
                <div className={styles.imgBox}>
                  <img src={service.img.src} alt={service.title} />
                </div>

                <div
                  className={`${styles.icon} ${
                    isRight ? styles.iconRight : styles.iconLeft
                  }`}
                >
                  <div className={styles.iconBox}>{service.icon}</div>
                </div>
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
}
