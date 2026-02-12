"use client";
import { Check } from "lucide-react";
import styles from "@/styles/landingpage/WhyChooseUs.module.scss";
import { IconChecks } from "@tabler/icons-react";
import whyImg from "@/public/assets/hero/why.png";
import Image from "next/image";
import graph from "@/public/assets/illustrations/graph.png";
import calender from "@/public/assets/illustrations/calender.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

function WhyFeature() {
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

  const slideFromRight = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };
  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="container mx-auto"
      >
        <div
          className={`grid rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 ${styles.whyFeatureContainer}`}
        >
          <div className="flex gap-10 flex-col">
            <div className={styles.headings}>
              <motion.h1 variants={itemVariants}>
                Simplifying Tax Filing for Individuals & Businesses
              </motion.h1>
              <motion.p variants={itemVariants}>
                We combine secure technology with experienced tax professionals
                to deliver accurate, compliant, and efficient tax filing
                solutions. From personal returns to complex business filings, we
                make the process seamless and worry-free.
              </motion.p>
            </div>
            <div
              className={`grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6 ${styles.pointsContainer}`}
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-row gap-6 items-start"
              >
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Secure & Confidential</h2>
                  <p className="text-muted-foreground text-sm">
                    Your data is protected with advanced encryption.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-row gap-6 items-start"
              >
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Accurate & Compliant</h2>
                  <p className="text-muted-foreground text-sm">
                    Prepared with precision and full IRS compliance.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-row gap-6 items-start"
              >
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Fully Online Process</h2>
                  <p className="text-muted-foreground text-sm">
                    Upload, review, and track everything digitally.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className={styles.buttonDiv}>
              <button>Get Started</button>
              <span>
                <IconArrowNarrowRight stroke={2} />
              </span>
            </motion.div>
          </div>
          <div className={styles.imgContainer}>
            <motion.div variants={itemVariants}>
              <Image src={whyImg} alt="img" />
            </motion.div>
            <motion.div
              variants={slideFromLeft}
              className={`${styles.icon1} ${styles.decor}`}
            >
              <Image src={graph} alt="1" />
            </motion.div>
            <motion.div
              variants={slideFromRight}
              className={`${styles.icon2} ${styles.decor}`}
            >
              <Image src={calender} alt="2" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export { WhyFeature };
