import { Check } from "lucide-react";
import styles from "@/styles/landingpage/WhyChooseUs.module.scss";
import { IconChecks } from "@tabler/icons-react";
import whyImg from "@/public/assets/hero/why.png";
import Image from "next/image";
import graph from "@/public/assets/illustrations/graph.png";
import calender from "@/public/assets/illustrations/calender.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function WhyFeature() {
  return (
    <div className={styles.container}>
      <div className="container mx-auto">
        <div
          className={`grid rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 ${styles.whyFeatureContainer}`}
        >
          <div className="flex gap-10 flex-col">
            <div className={styles.headings}>
              <h1>Simplifying Tax Filing for Individuals & Businesses</h1>
              <p>
                We combine secure technology with experienced tax professionals
                to deliver accurate, compliant, and efficient tax filing
                solutions. From personal returns to complex business filings, we
                make the process seamless and worry-free.
              </p>
            </div>
            <div
              className={`grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6 ${styles.pointsContainer}`}
            >
              <div className="flex flex-row gap-6 items-start">
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Secure & Confidential</h2>
                  <p className="text-muted-foreground text-sm">
                    Your data is protected with advanced encryption.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Accurate & Compliant</h2>
                  <p className="text-muted-foreground text-sm">
                    Prepared with precision and full IRS compliance.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <IconChecks stroke={1} color="#fff" className="mt-2" />
                <div className="flex flex-col gap-1">
                  <h2>Fully Online Process</h2>
                  <p className="text-muted-foreground text-sm">
                    Upload, review, and track everything digitally.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button>Get Started</button>
              <span>
                <IconArrowNarrowRight stroke={2} />
              </span>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src={whyImg} alt="img" />
            <div className={`${styles.icon1} ${styles.decor}`}>
              <Image src={graph} alt="1" />
            </div>
            <div className={`${styles.icon2} ${styles.decor}`}>
              <Image src={calender} alt="2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { WhyFeature };
