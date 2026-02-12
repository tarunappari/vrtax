"use client";

import { motion } from "framer-motion";
import dashDesk from "@/public/assets/hero/dashDesk.png";
import Image from "next/image";
import { Hero } from "../../landingpage/herosection/animatedHero";
import styles from "@/styles/landingpage/Herosection.module.scss";

export function AboutHeroUI() {
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
    <div className={`${styles.container} aboutHero mx-auto`}>
      <main className="relative container px-2 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <motion.div
            className=" relative flex flex-col items-center space-y-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            <Hero />

            <motion.div
              className="max-w-4xl border mt-5 p-2 rounded-3xl"
              variants={itemVariants}
            >
              <div className="relative w-full">
                <div className="relative w-full rounded-3xl overflow-hidden border shadow-2xl">
                  <Image
                    src={dashDesk}
                    alt="dash"
                    className="w-full h-full object-center hidden dark:block rounded-3xl"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
