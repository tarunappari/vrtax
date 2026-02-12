"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/landingpage/faq/accordion";
import Link from "next/link";
import styles from "@/styles/about/AboutFAQ.module.scss";

export default function AboutFAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "What makes VR Tax filing different?",
      answer:
        "We combine experienced tax professionals with a secure digital platform to deliver accurate, IRS-compliant filings with fast turnaround times and transparent communication.",
    },
    {
      id: "item-2",
      question: "Who does VR Tax filing serve?",
      answer:
        "We support individuals, freelancers, entrepreneurs, LLCs, and corporations across the United States with reliable and fully compliant tax solutions.",
    },
    {
      id: "item-3",
      question: "How experienced is your team?",
      answer:
        "Our team consists of knowledgeable tax professionals with extensive experience in federal and state tax regulations, ensuring precision and compliance in every filing.",
    },
    {
      id: "item-4",
      question: "How do you ensure accuracy?",
      answer:
        "Every return undergoes careful review and quality checks to maintain accuracy, compliance, and adherence to current IRS standards.",
    },
    {
      id: "item-5",
      question: "What is your commitment to client service?",
      answer:
        "We are committed to professionalism, confidentiality, and clear communication, providing dependable support throughout the entire tax process.",
    },
  ];

  return (
    <section className={`${styles.container}`}>
      <div className={styles.faqcontainer}>
        <div className="mx-auto max-w-xl">
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
        </div>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>
      </div>
    </section>
  );
}
