"use client";
import React from "react";
import RelaxationTestimonial from "../ui/landingpage/tetimonials/testimonials";
import styles from "@/styles/landingpage/Testimonials.module.scss";
import { Quote } from "lucide-react";
import { IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AvatarCircles } from "../ui/landingpage/tetimonials/avatar";

const Testimonials = () => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className={styles.testimonialContainer}
    >
      <div className={styles.title}>
        <motion.h3 variants={itemVariants}>TESTIMONIALS</motion.h3>
        <motion.h1 variants={itemVariants}>What our clients say</motion.h1>
        <motion.div variants={itemVariants} className="flex items-center">
          <AvatarCircles />
          <div className="flex pl-2">
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
          </div>
        </motion.div>
      </div>
      <div className={styles.testimonialDivider}>
        <motion.div variants={slideFromRight} className={styles.timelineTitle}>
          <div>
            <h1>10K+</h1>
            <h2>
              Tax Returns Filed <br /> Accurately On Time
            </h2>
          </div>
          <p>
            Trusted by individuals and businesses <br /> across the United
            States.
          </p>
        </motion.div>
        <motion.div variants={slideFromLeft} className={styles.timeline}>
          <span className={styles.quote}>
            <Quote className="size-8 text-[#67846c]" />{" "}
          </span>
          <RelaxationTestimonial />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
