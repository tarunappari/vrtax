"use client";
import { motion } from "framer-motion";
import styles from "@/styles/services/ServicesCardsSection.module.scss";
import {
  IconBriefcase,
  IconBuildingStore,
  IconReportAnalytics,
  IconCalendarDollar,
  IconFileOff,
  IconIdBadge2,
  IconRefresh,
  IconBuildingBank,
} from "@tabler/icons-react";

import businessTaxImg from "@/public/assets/services/busi.png";
import franchiseImg from "@/public/assets/services/busi.png";
import annualReportImg from "@/public/assets/services/busi.png";
import estimatedTaxImg from "@/public/assets/services/busi.png";
import dissolutionImg from "@/public/assets/services/busi.png";
import boirImg from "@/public/assets/services/busi.png";
import reinstatementImg from "@/public/assets/services/busi.png";
import federalStateImg from "@/public/assets/services/busi.png";

const businessServices = [
  {
    title: "Business Tax Filing",
    description:
      "Comprehensive federal and state business tax filing with accurate documentation, regulatory compliance, and detailed review to ensure your company meets all reporting obligations.",
    icon: <IconBriefcase size={24} />,
    img: businessTaxImg,
  },
  {
    title: "Franchise Tax Filing",
    description:
      "Timely state franchise tax reporting to maintain your company’s active status and avoid penalties, with careful compliance checks and accurate submissions.",
    icon: <IconBuildingStore size={24} />,
    img: franchiseImg,
  },
  {
    title: "Annual Reports Filing",
    description:
      "Professional preparation and submission of annual corporate reports to keep your business in good standing with state regulatory authorities.",
    icon: <IconReportAnalytics size={24} />,
    img: annualReportImg,
  },
  {
    title: "Estimated Tax Filing",
    description:
      "Accurate calculation and quarterly estimated tax filings to help businesses avoid underpayment penalties and maintain consistent compliance throughout the year.",
    icon: <IconCalendarDollar size={24} />,
    img: estimatedTaxImg,
  },
  {
    title: "Business Dissolution",
    description:
      "Structured business closure support including final tax filings, regulatory documentation, and compliance management to ensure a smooth and legally sound dissolution process.",
    icon: <IconFileOff size={24} />,
    img: dissolutionImg,
  },
  {
    title: "BOI-R Filing",
    description:
      "Beneficial Ownership Information reporting assistance to ensure federal compliance under current transparency regulations with accurate and secure submissions.",
    icon: <IconIdBadge2 size={24} />,
    img: boirImg,
  },
  {
    title: "Business Reinstatement",
    description:
      "Comprehensive reinstatement services to restore inactive or suspended businesses by resolving compliance gaps and completing required filings.",
    icon: <IconRefresh size={24} />,
    img: reinstatementImg,
  },
  {
    title: "Federal & State Assistance",
    description:
      "Ongoing federal and state-level tax compliance support, advisory services, and regulatory guidance to keep your business aligned with current requirements.",
    icon: <IconBuildingBank size={24} />,
    img: federalStateImg,
  },
];

export default function BusinessServicesCardsSection() {
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
        <motion.p  variants={itemVariants}> 
          Each return is carefully reviewed to ensure accuracy, compliance, and
          maximum eligible benefits.
        </motion.p>
      </div>
      <section className={styles.wrapper}>
        {businessServices.map((service, index) => {
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
