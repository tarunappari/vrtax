import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/about/values/ValueCard";
import { cn } from "@/lib/utils";
import {
  Gauge,
  Shield,
  Zap,
  TrendingUp,
  Cpu,
  Lock,
  Settings,
} from "lucide-react";

const features = [
  {
    id: "performance",
    icon: Gauge,
    title: "Accuracy",
    description:
      "Every return is carefully reviewed to ensure precision and compliance.",
  },
  {
    id: "security",
    icon: Lock,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and professional ethics.",
  },
  {
    id: "scalability",
    icon: TrendingUp,
    title: "Security",
    description:
      "Your financial data is protected with advanced encryption and strict confidentiality.",
  },
  {
    id: "Client Commitment",
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "We prioritize clear communication and dedicated support throughout the process.",
  },
];

export const ValuesGridUiSection = ({
  sectionTitle = "Our Core Values",
  sectionSubtitle = "A suite of powerful features engineered to deliver speed, security, and scalability.",
}) => {
  return (
    <section
      className={cn("bg-background text-foreground")}
      role="region"
      aria-label={
        sectionTitle ? `Features: ${sectionTitle}` : "Product Features"
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {sectionTitle && (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {sectionSubtitle}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2"
          role="list"
        >
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="flex flex-col justify-center items-center h-full p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-primary/50 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              role="listitem"
            >
              <CardHeader className="flex flex-col justify-center items-center p-0 pb-3">
                <div className="mb-3 p-2 w-fit rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 " aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
              {/* Optional: Add a CardFooter for a "Learn More" link */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
