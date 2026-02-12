"use client";

import { Sparkles } from "@/components/ui/landingpage/trust/sparkles";

import gridlo from "@/public/assets/trusted/Gridlo.png";
import nexova from "@/public/assets/trusted/Nexova.png";
import mantisLabs from "@/public/assets/trusted/Mantislabs.png";
import qubiq from "@/public/assets/trusted/Qubiq.png";
import Albios from "@/public/assets/trusted/Albios.png";
import Rivotech from "@/public/assets/trusted/Rivotech.png";
import Synthara from "@/public/assets/trusted/Synthara.png";
import Creatwave from "@/public/assets/trusted/Crestwave.png";
import Image from "next/image";
import styles from '@/styles/landingpage/TrustSection.module.scss'

export function AnimatedTrust() {
  return (
    <div className={`w-full overflow-hidden bg-white ${styles.container}`}>
      <div className="mx-auto mt-2 w-full max-w-3xl">
        <div className={styles.headline}>
          <span>Trusted by worlds leading experts.</span>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-8 items-center justify-items-center">
          <Image
            src={gridlo}
            alt="Gridlo"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={nexova}
            alt="Nexova"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={mantisLabs}
            alt="Mantis Labs"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={qubiq}
            alt="Qubiq"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={Albios}
            alt="Albios"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={Synthara}
            alt="Synthara"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={Creatwave}
            alt="Crestwave"
            className="h-6 w-auto object-contain"
          />
          <Image
            src={Rivotech}
            alt="Rivotech"
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#083c2f,transparent_50%)] before:opacity-35" />
        {/* WHITE ARC */}
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white bg-white" />
        {/* BLACK SPARKLES for light theme */}
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#000000"
        />
      </div>
    </div>
  );
}


