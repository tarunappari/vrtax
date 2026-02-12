'use client'
import React from "react";
import { FeaturesSectionWithHoverEffects } from "../ui/landingpage/services/services";
import {
  IconReceiptTax,
  IconId,
  IconFileInvoice,
  IconBuildingBank,
  IconCalendarTime,
  IconChartLine,
  IconCalculator,
  IconShieldCheck,
  IconBriefcase,
  IconBuildingStore,
  IconReportAnalytics,
  IconCalendarDollar,
  IconFileOff,
  IconIdBadge2,
  IconRefresh,
} from "@tabler/icons-react";
import styles from "@/styles/landingpage/Services.module.scss";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const individualServices = [
    {
      title: "Tax Return Services",
      description: "Accurate filing with maximum refunds.",
      icon: <IconReceiptTax />,
    },
    {
      title: "ITIN Processing",
      description: "Secure ITIN application assistance.",
      icon: <IconId />,
    },
    {
      title: "Tax Preparation Services",
      description: "Hassle-free tax preparation support.",
      icon: <IconFileInvoice />,
    },
    {
      title: "FBAR & FATCA Processing",
      description: "Foreign account compliance assistance.",
      icon: <IconBuildingBank />,
    },
    {
      title: "Extension Filing Services",
      description: "File extensions before deadlines.",
      icon: <IconCalendarTime />,
    },
    {
      title: "Tax Planning & Advisory",
      description: "Strategic tax saving guidance.",
      icon: <IconChartLine />,
    },
    {
      title: "Tax Consultant Services",
      description: "Expert consultation for individuals.",
      icon: <IconCalculator />,
    },
    {
      title: "Audit Representation",
      description: "IRS audit representation support.",
      icon: <IconShieldCheck />,
    },
  ];

  const businessServices = [
    {
      title: "Business Tax Filing",
      description: "Complete corporate tax compliance.",
      icon: <IconBriefcase />,
    },
    {
      title: "Franchise Tax Filing",
      description: "State franchise tax reporting.",
      icon: <IconBuildingStore />,
    },
    {
      title: "Annual Reports Filing",
      description: "Timely corporate report submission.",
      icon: <IconReportAnalytics />,
    },
    {
      title: "Estimated Tax Filing",
      description: "Quarterly business tax payments.",
      icon: <IconCalendarDollar />,
    },
    {
      title: "Business Dissolution",
      description: "Smooth business closure process.",
      icon: <IconFileOff />,
    },
    {
      title: "BOI-R Filing",
      description: "Beneficial ownership information filing.",
      icon: <IconIdBadge2 />,
    },
    {
      title: "Business Reinstatement",
      description: "Restore inactive business status.",
      icon: <IconRefresh />,
    },
    {
      title: "Federal & State Assistance",
      description: "Federal and state compliance support.",
      icon: <IconBuildingBank />,
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
      <div>
        <div className={styles.title}>
          <motion.span variants={itemVariants}>SERVICES</motion.span>
          <motion.h1 variants={itemVariants}>Our Tax Services</motion.h1>
          <motion.p variants={itemVariants}>
            Accurate, secure, and IRS-compliant services designed to simplify
            your tax journey.
          </motion.p>
        </div>
        <div className={styles.services}>
          <motion.h2 variants={itemVariants}>Individual Services</motion.h2>
          <FeaturesSectionWithHoverEffects features={individualServices} />
        </div>
        <div className={styles.services}>
          <h2>Business Services</h2>
          <FeaturesSectionWithHoverEffects features={businessServices} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
