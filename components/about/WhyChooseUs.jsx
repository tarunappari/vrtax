"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import styles from "@/styles/about/OurValues.module.scss";

const defaultItems = [
  "100% Secure Online Process",
  "48-Hour Draft Turnaround",
  "IRS-Compliant Filing",
  "Support for Individuals & Businesses",
  "Dedicated Tax Professionals",
];

export const WhyChooseUs = ({
  title = "Why Leading Clients Rely on Us",
  description = "Clients choose us for our secure process, fast turnaround, and dependable expertise. We make tax filing simple, accurate, and stress-free from start to finish.",
  items = defaultItems,
}) => {
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
    <section className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="flex justify-center">
          <div className="max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-15 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="flex flex-col items-start gap-5 ">
                <motion.h4 variants={itemVariants}  className="mb-1 text-2xl font-bold md:text-3xl">{title}</motion.h4>
                <motion.p  variants={itemVariants} className="text-muted-foreground max-w-2xl">{description}</motion.p>
              </div>
              <div className={styles.whyChooseUsListItems}>
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <motion.li variants={itemVariants}  className="flex items-center text-lg" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
