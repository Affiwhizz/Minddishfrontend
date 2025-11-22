import { motion } from "motion/react";
import { useState } from "react";
import { Play, Sparkles } from "lucide-react";

export function DemoInput() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Try It <span style={{ color: '#F64D00' }}>Now</span>
          </h2>
          <p className="text-grey text-lg">
            Paste any YouTube cooking video URL and experience the power of AI-driven
            culinary analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Premium input container */}
          <div className="relative p-8 rounded-3xl bg-white border border-cream shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            {/* Input field */}
            <div className="relative mb-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white" style={{ border: '2px solid #014325' }}>
                <Play className="w-6 h-6 flex-shrink-0" style={{ color: '#014325' }} />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="flex-1 bg-transparent outline-none text-charcoal placeholder:text-grey/50"
                />
              </div>
            </div>

            {/* Spacer */}
            <div className="h-6" />

            {/* Input hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: url.length > 0 ? 0 : 1 }}
              className="text-xs text-grey/60 flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-3 h-3" />
              <span>Works with any YouTube cooking video</span>
            </motion.div>

            {/* Spacer */}
            <div className="h-2" />

            {/* Analyze button */}
            <motion.button
              onClick={handleAnalyze}
              disabled={!url || isAnalyzing}
              whileHover={{ scale: url ? 1.02 : 1 }}
              whileTap={{ scale: url ? 0.98 : 1 }}
              className={`
                relative w-full py-5 rounded-2xl overflow-hidden
                transition-all duration-300 ease-in-out
                ${
                  url
                    ? "analyze-button shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(246,77,0,0.3)] cursor-pointer"
                    : "bg-grey/10 text-grey/50 cursor-not-allowed"
                }
              `}
              style={{ 
                backgroundColor: url ? '#E5E7EB' : undefined,
                color: url ? '#272F31' : undefined,
              }}
            >
              {/* Button glow effect */}
              {url && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-3 font-medium">
                {isAnalyzing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Analyzing Recipe...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Analyze Recipe</span>
                  </>
                )}
              </span>
            </motion.button>

            {/* Microinteraction indicators */}
            {url && !isAnalyzing && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-3 -right-3 w-12 h-12"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full rounded-full blur-md"
                  style={{ backgroundColor: 'rgba(246, 77, 0, 0.15)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F64D00' }}>
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Success animation */}
            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 rounded-3xl pointer-events-none"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.25, 0, 0.25],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-3xl border-4"
                  style={{ borderColor: '#F64D00' }}
                />
              </motion.div>
            )}
          </div>

          {/* Feature indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            {[
              { label: "Video Processing", value: "2-3 min", color: "#014325" },
              { label: "Languages Supported", value: "100+", color: "#F64D00" },
              { label: "Question Response", value: "< 10s", color: "#FFB40B" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl mb-2" style={{ color: stat.color, fontFamily: 'Quattrocento', fontWeight: 700 }}>{stat.value}</div>
                <div className="text-sm text-grey">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}