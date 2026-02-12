"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/landingpage/faq/accordion";
import Link from "next/link";
import styles from "@/styles/services/FAQ.module.scss";

export default function IndividualFAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "What individual tax services do you provide?",
      answer:
        "We offer comprehensive individual tax solutions including Form 1040 filing, ITIN processing, tax preparation, FBAR & FATCA reporting, extension filings, tax planning, and audit representation.",
    },
    {
      id: "item-2",
      question: "How long does individual tax filing take?",
      answer:
        "Once your documents are uploaded, we typically deliver your tax draft within 48 hours. Final filing timelines depend on document completeness and review approval.",
    },
    {
      id: "item-3",
      question: "Can freelancers use your services?",
      answer:
        "Yes. We specialize in supporting freelancers, independent contractors, and self-employed professionals with accurate and compliant tax preparation.",
    },
    {
      id: "item-4",
      question: "Do you provide assistance during an IRS audit?",
      answer:
        "Yes. Our audit representation services help individuals respond to IRS notices, resolve disputes, and navigate the audit process with professional support.",
    },
    {
      id: "item-5",
      question: "Is the entire individual filing process online?",
      answer:
        "Absolutely. You can securely upload documents, review drafts, and communicate with your assigned tax professional through our fully digital platform.",
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
    <section className={`${styles.container}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className={styles.faqcontainer}
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className={`${styles.endP} text-muted-foreground mt-6 px-8`}>
            Can't find what you're looking for? Contact our{" "}
            <Link
              href="#"
              className="text-primary font-bold text-white hover:underline"
            >
              customer support team
            </Link>
          </p>
        </motion.div>
        <div className="mx-auto max-w-xl text-center">
          <motion.h2 variants={itemVariants} className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
