"use client";
import styles from "@/styles/about/AboutCTA.module.scss";
import phone from "@/public/assets/hero/dashDesk.png";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const AboutCTA = ({
  title = "Let’s Simplify Your Tax Filing",
  description = "Whether you're filing as an individual or managing business obligations, our team is ready to provide secure and dependable tax solutions.",
  imageSrc = "https://shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt = "placeholder hero",
}) => {
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
    <section className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className="container"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1 variants={itemVariants} className="my-6 mt-0 text-4xl font-bold text-balance lg:text-5xl">
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className={styles.buttonDiv}>
              <button>Start Filing Today</button>
              <span>
                <IconArrowNarrowRight stroke={2} />
              </span>
            </motion.div>
          </div>
          <div className={styles.imgContainer}>
            <motion.div variants={itemVariants}>
              <Image src={phone} alt={imageAlt} />
            </motion.div>
            <div className={styles.shadow}></div>
            <motion.div
              className="absolute top-3 -left-5 h-16 w-16 rounded-full -z-1 bg-[#BBD189]/50"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute -bottom-8 right-0 -z-1 h-18 w-18 rounded-lg bg-green-200/50 dark:bg-green-800/30"
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: "0.5s" }}
            />
            <motion.div
              className="absolute bottom-7 -left-12 h-12 -z-1 w-12 rounded-full bg-green-200/50 dark:bg-green-800/30"
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: "1s" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
