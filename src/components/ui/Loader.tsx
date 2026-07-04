import { AnimatePresence, motion } from "motion/react";

const letters = "REYAN".split("");

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-9999 overflow-hidden bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 4 }}
      >
        {/* Orbit */}
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-white/15"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-200 shadow-[0_0_20px_#60a5fa]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="flex overflow-hidden text-7xl lg:text-9xl font-bold tracking-tight text-white"
          animate={{
            opacity: [1, 1, 1, 0],
            scale: [1, 1, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            times: [0, 0.7, 0.85, 1],
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}
