"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useState } from "react";
import styles from "@/styles/landingpage/Herosection.module.scss";
import phone from "@/public/assets/hero/dashboard.png";
import hero from "@/public/assets/hero/herosection.png";
import desk from "@/public/assets/hero/hero2.jpg";
import { Button } from "./heroSectionButton";
import { MoveRight, PhoneCall } from "lucide-react";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const LandingPageMainHero = ({ className }) => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Individuals", "Business"], []);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-background py-12 sm:py-24",
        className,
      )}
    >
      <div className="container mt-10 mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <div
          className={`relative w-full container mx-auto ${styles.mainContainerOfInfo}`}
        >
          <div
            className={`${styles.info} flex gap-8 items-center justify-center flex-col`}
          >
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular">
                <span className="text-spektr-cyan-50 font-semibold">
                  “Stress-Free Tax Filing for{" "}
                </span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-bold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-lg md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                We simplify tax filing for individuals and businesses with
                secure online document submission and accurate, IRS-compliant
                preparation. Fast, reliable, and completely hassle-free.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 greenBgButton">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full  bg-[#BBD189]/50"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-0 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "1s" }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-54 sm:w-64"
            style={{ transformOrigin: "bottom center" }}
            variants={imageVariants}
          >
            <img
              src={hero.src}
              alt="Student learning"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="herophoneImg absolute right-10 top-1/3 h-0 w-50 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: "left center" }}
            variants={imageVariants}
          >
            <img
              src={phone.src}
              alt="Tutor assisting"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-0 left-10 h-32 w-32 rounded-2xl bg-muted p-2 shadow-lg sm:h-48 sm:w-70"
            style={{ transformOrigin: "top right" }}
            variants={imageVariants}
          >
            <img
              src={desk.src}
              alt="Collaborative discussion"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPageMainHero;
