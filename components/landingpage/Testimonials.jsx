"use client";
import React from "react";
import RelaxationTestimonial from "../ui/landingpage/tetimonials/testimonials";
import styles from "@/styles/landingpage/Testimonials.module.scss";
import { Quote } from "lucide-react";
import { IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AvatarCircles } from "../ui/landingpage/tetimonials/avatar";

const Testimonials = () => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.title}>
        <h3>
          TESTIMONIALS
        </h3>
        <h1>What our clients say</h1>
        <div className="flex items-center">
          <AvatarCircles />
          <div className="flex pl-2">
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
            <IconStar color="#083c2f" fill="#083c2f" />
          </div>
        </div>
      </div>
      <div className={styles.testimonialDivider}>
        <div className={styles.timelineTitle}>
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
        </div>
        <motion.div className={styles.timeline}>
          <span className={styles.quote}>
            <Quote className="size-8 text-[#67846c]" />{" "}
          </span>
          <RelaxationTestimonial />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
