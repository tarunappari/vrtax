import { Check } from "lucide-react";
import styles from '@/styles/about/OurValues.module.scss'

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
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-15 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="flex flex-col items-start gap-5 ">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground max-w-2xl">{description}</p>
                
              </div>
              <div className={styles.whyChooseUsListItems}>
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center text-lg" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
