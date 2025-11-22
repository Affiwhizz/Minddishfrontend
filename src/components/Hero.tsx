import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          AI-Powered Cooking
          <br />
          <span style={{ color: '#FFB40B' }}>Discovery.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12 text-grey"
        >
          Paste a YouTube cooking video and chat with an AI that understands
          ingredients, culture, nutrition, and cooking technique.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all"
          style={{ backgroundColor: '#014325', boxShadow: '0 0 32px rgba(1, 67, 37, 0.25)' }}
        >
          <span className="text-white">Start Exploring</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-white" />
        </motion.button>

        {/* 3D Hero Object Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative mt-20 mx-auto max-w-5xl"
        >
          {/* 3D Object placeholder with depth of field effect */}
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden border-4 border-cream/50"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Main image - clean, no overlays */}
              <div className="relative w-full h-full">
                {/* Video Placeholder for Figma */}
                <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center gap-6 text-center p-8">
                  {/* Placeholder rectangle */}
                  <div className="w-full h-full border-4 border-dashed border-yellow rounded-2xl flex flex-col items-center justify-center gap-4" style={{ borderColor: '#FFB40B' }}>
                    {/* Video icon */}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB40B' }}>
                      <svg 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M8 5.5V18.5L18 12L8 5.5Z" 
                          fill="#272F31" 
                        />
                      </svg>
                    </div>
                    
                    {/* Label */}
                    <div>
                      <div className="mb-2" style={{ 
                        fontFamily: 'Quattrocento', 
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#FFFFFF' 
                      }}>
                        VIDEO PLACEHOLDER
                      </div>
                      <div style={{ 
                        fontFamily: 'Quicksand',
                        fontSize: '1.125rem',
                        color: '#FFB40B',
                        fontWeight: 600
                      }}>
                        cooking_loop.mp4
                      </div>
                    </div>
                    
                    {/* Note */}
                    <div className="px-6 py-3 rounded-lg" style={{ 
                      backgroundColor: 'rgba(255, 180, 11, 0.1)',
                      border: '1px solid rgba(255, 180, 11, 0.3)'
                    }}>
                      <div style={{ 
                        fontFamily: 'Quicksand',
                        fontSize: '0.875rem',
                        color: '#FFFFFF',
                        fontWeight: 500
                      }}>
                        Autoplay, loop, muted, no controls
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-grey">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-grey/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#F64D00' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}