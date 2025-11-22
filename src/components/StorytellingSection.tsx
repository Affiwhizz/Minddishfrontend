import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Flame, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const stories = [
  {
    icon: Flame,
    title: "Fast Analysis",
    description:
      "Our AI processes hours of cooking content efficiently, extracting every detail that matters. Follow-up questions return in under 10 seconds.",
    stat: "2-3 min",
    label: "Video processing time",
    color: "#FFB40B",
    stat2: "< 10s",
    label2: "Response time for questions",
    statColor: "#FFFFFF",
    stat2Color: "#FFB40B",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your cooking preferences and chat history remain completely private and secure.",
    stat: "Zero Data Retention",
    label: "Your data stays private",
    color: "#F64D00",
    statColor: "#FFB40B",
  },
  {
    icon: Sparkles,
    title: "Continuously Learning",
    description:
      "MindDish evolves with every interaction, becoming smarter about global cuisines.",
    stat: "50K+",
    label: "Recipes analyzed daily",
    color: "#FFB40B",
    statColor: "#FFB40B",
  },
  {
    icon: TrendingUp,
    title: "Growing Knowledge",
    description:
      "Access insights from world-class chefs and home cooks across the globe.",
    stat: "200+",
    label: "Countries represented",
    color: "#FFB40B",
    statColor: "#FFB40B",
  },
];

export function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-20 px-6 bg-green overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Fixed Layout */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Title - One Line */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white mb-10"
            style={{ fontSize: '48px', lineHeight: '1.2' }}
          >
            The Future of <span style={{ color: '#FFB40B' }}>Culinary Intelligence</span>
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: '16px', 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px'
            }}
          >
            MindDish analyzes video content in 2–3 minutes depending on length.
            Follow-up questions return in under 10 seconds.
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-px bg-white/20 mt-10 mb-16" />
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:pb-8 no-scrollbar">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lg:snap-center lg:flex-shrink-0 lg:w-[500px]"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="relative p-10 rounded-3xl border border-white/20 hover:border-white/30 backdrop-blur-xl transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    backgroundColor: '#1A3D2E',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-8 w-20 h-20 rounded-2xl flex items-center justify-center relative"
                    style={{ backgroundColor: `${story.color}30` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <story.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    
                    {/* Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-xl -z-10"
                      style={{ backgroundColor: `${story.color}40` }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0.65, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white mb-4">{story.title}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-6 border-t border-white/20 space-y-4">
                    <div>
                      <div 
                        className="text-5xl mb-2" 
                        style={{ 
                          color: story.statColor, 
                          fontFamily: 'Quattrocento', 
                          fontWeight: 700,
                        }}
                      >
                        {story.stat}
                      </div>
                      <div className="text-white/60 text-sm">{story.label}</div>
                    </div>
                    {story.stat2 && (
                      <div>
                        <div className="text-5xl mb-2" style={{ color: story.stat2Color, fontFamily: 'Quattrocento', fontWeight: 700 }}>
                          {story.stat2}
                        </div>
                        <div className="text-white/60 text-sm">{story.label2}</div>
                      </div>
                    )}
                  </div>

                  {/* Decorative parallax elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-32 h-32 border rounded-full"
                    style={{ 
                      transform: "translateZ(30px)",
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-8 left-8 w-16 h-16 rounded-xl"
                    style={{ 
                      transform: "translateZ(20px)",
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint for desktop */}
          <div className="hidden lg:flex justify-center mt-12">
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white/50 text-sm flex items-center gap-2"
            >
              <span>Scroll horizontally to explore</span>
              <div className="w-8 h-0.5 bg-yellow" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 180, 11, 0.1)' }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(246, 77, 0, 0.1)' }}
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}