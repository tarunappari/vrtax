"use client";
import styles from "@/styles/landingpage/CTASection.module.scss";
import phone from "@/public/assets/hero/dashboard.png";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const CTASection = ({
  title = "Ready for a Stress-Free Tax Experience?",
  description = "From personal returns to complex business filings, our professionals ensure precision, security, and timely delivery every step of the way.",
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
            <motion.h1
              variants={itemVariants}
              className="my-6 mt-0 text-4xl font-bold text-balance lg:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-xl text-muted-foreground lg:text-lg"
            >
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className={styles.buttonDiv}>
              <button>Get Started</button>
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
              className="absolute top-6 -left-1 h-16 w-16 rounded-full -z-1 bg-[#BBD189]/50"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-0 right-5 -z-1 h-12 w-12 rounded-lg bg-green-200/50 dark:bg-green-800/30"
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: "0.5s" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-8 h-8 -z-1 w-8 rounded-full bg-green-200/50 dark:bg-green-800/30"
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
