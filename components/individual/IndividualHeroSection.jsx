import daskDesk from "@/public/assets/services/indi.png";
import Image from "next/image";
import styles from "@/styles/services/ServicesHero.module.scss";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const IndividualHeroSection = () => {
  return (
    <section
      className={` py-12 sm:py-16 lg:py-24 relative overflow-hidden ${styles.container}`}
    >
      {/* Decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#c9f269] rounded-full"></div>
      <div className="hidden sm:block absolute top-32 left-32 w-2 h-2 sm:w-3 sm:h-3 bg-[#083c2f] rounded-sm transform rotate-45"></div>
      <div className="hidden sm:block absolute top-40 left-16 w-1 h-6 sm:w-2 sm:h-8 bg-[#c9f269]"></div>
      <div className="hidden sm:block absolute top-48 left-24 w-4 h-1 sm:w-6 sm:h-2 bg-[#083c2f]"></div>

      <div className="container mt-30 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Personal Tax Filing, Handled with Precision
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8  mx-auto lg:mx-0 leading-relaxed">
              We provide accurate and fully IRS-compliant tax preparation for
              individuals, freelancers, and independent professionals across the
              United States. Our streamlined digital process ensures convenience
              without compromising on expertise.
            </p>

            <div className="getStartedBtn">
              <button>Get Started</button>
              <span>
                <IconArrowNarrowRight stroke={2} />
              </span>
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            {/* AI Dashboard Card */}
            <div className="relative transform rotate-6 sm:rotate-7 hover:rotate-0 transition-transform duration-300 mx-auto ">
              <Image
                src={daskDesk}
                alt="dash"
                width={500}
                className=" shadow-2xl"
              />
            </div>

            {/* Floating decorative elements - smaller on mobile */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#c9f269]/92 rounded-lg transform rotate-45"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#083c2f]/7 rounded-full"></div>

            {/* Scattered pixels - hidden on mobile */}
            <div className="hidden sm:block absolute top-8 right-8 w-2 h-2 bg-[#c9f269]/69"></div>
            <div className="hidden sm:block absolute bottom-12 left-8 w-3 h-3 bg-[#083c2f]/70 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualHeroSection;
