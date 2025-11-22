import { motion } from "motion/react";

const features = [
  "AI-Powered Recipe Analysis",
  "Multilingual Support",
  "Smart Ingredient Substitutions",
  "Nutrition Breakdown",
  "Cultural Context",
  "Step-by-Step Guidance",
  "Dietary Adaptations",
  "Cooking Techniques",
];

const dotColors = ["#014325", "#F64D00", "#FFB40B"];

export function MarqueeSection() {
  return (
    <section className="relative py-8 overflow-hidden bg-white">
      {/* Infinite scrolling marquee */}
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First set */}
          {features.map((feature, index) => (
            <div key={`first-${index}`} className="inline-flex items-center mx-8">
              <span className="text-xl" style={{ color: '#272F31' }}>{feature}</span>
              <span className="mx-8 w-2 h-2 rounded-full" style={{ backgroundColor: dotColors[index % 3] }} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {features.map((feature, index) => (
            <div key={`second-${index}`} className="inline-flex items-center mx-8">
              <span className="text-xl" style={{ color: '#272F31' }}>{feature}</span>
              <span className="mx-8 w-2 h-2 rounded-full" style={{ backgroundColor: dotColors[index % 3] }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}