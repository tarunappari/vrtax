import React from "react";
import { ValuesGridUiSection } from "../ui/about/values/ValuesGridUiSection";
import styles from '@/styles/about/OurValues.module.scss'

const OurValues = () => {
  return (
    <div className={styles.container}>
      <ValuesGridUiSection
        sectionTitle="Our Core Values"
        sectionSubtitle="We are guided by accuracy, integrity, and confidentiality. Every tax return is prepared with precision and handled with the highest professional standards to ensure compliance and client trust."
      />
    </div>
  );
};

export default OurValues;
