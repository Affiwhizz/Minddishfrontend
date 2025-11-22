import { motion } from "motion/react";
import {
  ChefHat,
  Apple,
  Leaf,
  Scale,
  List,
  Salad,
  Beaker,
  UtensilsCrossed,
} from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Multilingual Support",
    description: "Understand and translate recipes from any language seamlessly.",
    color: "#014325",
  },
  {
    icon: Apple,
    title: "Smart Substitutions",
    description: "Get instant alternatives for any ingredient based on dietary needs.",
    color: "#F64D00",
  },
  {
    icon: Beaker,
    title: "Nutrition Insights",
    description: "Detailed nutritional breakdown with macro and micronutrient data.",
    color: "#FFB40B",
  },
  {
    icon: UtensilsCrossed,
    title: "Cultural Context",
    description: "Learn the history and cultural significance behind every dish.",
    color: "#014325",
  },
  {
    icon: Scale,
    title: "Recipe Scaling",
    description: "Adjust serving sizes with automatic ingredient recalculation.",
    color: "#F64D00",
  },
  {
    icon: List,
    title: "Step Breakdown",
    description: "Clear, actionable steps with timing and technique guidance.",
    color: "#FFB40B",
  },
  {
    icon: Salad,
    title: "Dietary Adaptations",
    description: "Customize recipes for vegan, keto, gluten-free, and more.",
    color: "#014325",
  },
  {
    icon: Leaf,
    title: "Ingredient Analysis",
    description: "Deep dive into ingredient properties, flavor profiles, and chemistry.",
    color: "#F64D00",
  },
];

export function FeaturesGrid() {
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
          <h2 className="mb-4">
            Everything You Need to
            <br />
            <span className="text-green">Master Any Recipe</span>
          </h2>
          <p className="text-grey max-w-2xl mx-auto">
            MindDish combines advanced AI with culinary expertise to give you
            comprehensive insights into every cooking video.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
              style={{
                perspective: "1000px",
              }}
            >
              {/* 3D Card with parallax effect */}
              <motion.div
                className="relative h-full p-8 rounded-3xl bg-white transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  border: '1px solid #E5E5E5',
                }}
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Icon container */}
                <div className="relative mb-6">
                  <motion.div
                    className="relative w-16 h-16"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {/* Icon */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <feature.icon
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-md -z-10"
                      style={{ backgroundColor: `${feature.color}15` }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.25, 0.5, 0.25],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <h4 className="mb-3">{feature.title}</h4>
                <p className="text-grey text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-0.5"
                  style={{ background: `linear-gradient(to right, transparent, ${feature.color}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}