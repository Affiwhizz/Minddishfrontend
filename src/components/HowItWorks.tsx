import { motion } from "motion/react";
import { Link2, UtensilsCrossed, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Paste a YouTube link",
    description:
      "Simply drop in any YouTube cooking video URL and let MindDish access the content.",
    color: "#014325",
    iconColor: "#FFB40B",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "MindDish analyzes the recipe",
    description:
      "Our AI processes the video, extracting ingredients, techniques, timing, and cultural context.",
    color: "#F64D00",
    iconColor: "#F64D00",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Ask anything",
    description:
      "Chat naturally with the AI about substitutions, nutrition, scaling, or cooking methods.",
    color: "#FFB40B",
    iconColor: "#014325",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4">How It Works</h2>
          <p className="text-grey max-w-2xl mx-auto">
            Transform any cooking video into an intelligent, interactive
            culinary assistant in three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative p-8 rounded-3xl bg-white border border-[#E5E5E5] hover:border-[#E5E5E5] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              {/* Number badge */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: step.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-semibold">{step.number}</span>
              </motion.div>

              {/* Icon with glow effect */}
              <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{ backgroundColor: `${step.color}15` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#E5E5E5] group-hover:border-[#E5E5E5] transition-colors">
                  <step.icon className="w-8 h-8" style={{ color: step.iconColor }} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-grey">{step.description}</p>

              {/* Hover glow accent */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${step.color}10, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}