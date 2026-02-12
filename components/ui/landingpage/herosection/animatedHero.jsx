"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/landingpage/herosection/heroSectionButton";
import styles from "@/styles/landingpage/Herosection.module.scss";
import icon1 from "@/public/assets/icons/icon1.png";
import icon2 from "@/public/assets/icons/icon8.png";
import icon3 from "@/public/assets/icons/icon6.png";
import icon4 from "@/public/assets/icons/icon5.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Trusted Expertise.", "Proven Reliability."],
    [],
  );

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
    <div className={`${styles.info}`}>
      <div
        className={`relative mt-10 w-full container mx-auto ${styles.mainContainerOfInfo}`}
      >
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-5xl max-w-5xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 font-semibold">
                “Modern Tax Filing, Simplified.{" "}
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

            <p className="text-lg md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-4xl text-center">
              At VR Tax Filing, we believe tax filing should be simple, transparent,
              and stress-free. Our mission is to provide individuals and
              businesses across the United States with secure, accurate, and
              fully IRS-compliant tax solutions.
            </p>
          </div>
          <div className="getStartedBtn">
            <button>Get Started</button>
            <span>
              <IconArrowNarrowRight stroke={2} />
            </span>
          </div>
        </div>
      </div>

      <motion.div
        className="heroIconConatiner absolute -left-30 top-0 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg"
        style={{ transformOrigin: "bottom center" }}
        variants={imageVariants}
      >
        <img src={icon1.src} alt="Student learning" />
      </motion.div>
      <motion.div
        className="herophoneImg heroIconConatiner absolute -left-20 top-70 rounded-2xl bg-muted p-2 shadow-lg "
        style={{ transformOrigin: "left center" }}
        variants={imageVariants}
      >
        <img src={icon2.src} alt="Tutor assisting" />
      </motion.div>
      <motion.div
        className="absolute heroIconConatiner top-40 -right-30  rounded-2xl bg-muted p-2 shadow-lg "
        style={{ transformOrigin: "top right" }}
        variants={imageVariants}
      >
        <img src={icon3.src} alt="Collaborative discussion" />
      </motion.div>
      <motion.div
        className="absolute heroIconConatiner -top-0 -right-50  rounded-2xl bg-muted p-2 shadow-lg "
        style={{ transformOrigin: "top right" }}
        variants={imageVariants}
      >
        <img src={icon4.src} alt="Collaborative discussion" />
      </motion.div>
    </div>
  );
}

export { Hero };
