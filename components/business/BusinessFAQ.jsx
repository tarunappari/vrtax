"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/landingpage/faq/accordion";
import Link from "next/link";
import styles from "@/styles/services/FAQ.module.scss";

export default function BusinessFAQ() {
const faqItems = [
  {
    id: "item-1",
    question: "What types of businesses do you serve?",
    answer:
      "We support LLCs, corporations, S-Corps, partnerships, startups, and established businesses across the United States with complete tax and compliance solutions.",
  },
  {
    id: "item-2",
    question: "What business tax services do you provide?",
    answer:
      "Our services include business tax filing, franchise tax reporting, annual reports filing, estimated tax payments, BOI-R filing, business dissolution, reinstatement, and federal & state compliance assistance.",
  },
  {
    id: "item-3",
    question: "How do you ensure business tax compliance?",
    answer:
      "Our team carefully reviews financial records, applies current federal and state regulations, and performs detailed compliance checks to ensure accurate and timely filings.",
  },
  {
    id: "item-4",
    question: "Do you assist with quarterly estimated tax payments?",
    answer:
      "Yes. We calculate and file quarterly estimated tax payments to help businesses avoid penalties and maintain compliance throughout the year.",
  },
  {
    id: "item-5",
    question: "Can you help restore an inactive business?",
    answer:
      "Absolutely. Our business reinstatement services help resolve compliance gaps, complete pending filings, and restore your company’s good standing.",
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