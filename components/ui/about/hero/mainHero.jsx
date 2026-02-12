"use client";

import { motion } from "framer-motion";
import dashDesk from "@/public/assets/hero/dashDesk.png";
import Image from "next/image";
import { Hero } from "../../landingpage/herosection/animatedHero";
import styles from "@/styles/landingpage/Herosection.module.scss";

export function AboutHeroUI() {
  return (
    <div className={`${styles.container} aboutHero mx-auto`}>
      <main className="relative container px-2 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <motion.div
            className=" relative flex flex-col items-center space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />

            <motion.div
              className="max-w-4xl border mt-5 p-2 rounded-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
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