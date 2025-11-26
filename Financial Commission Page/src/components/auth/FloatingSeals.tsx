import { motion } from "motion/react";

export function FloatingSeals() {
  const seals = [
    { emoji: "🦭", delay: 0, x: 20, y: 30 },
    { emoji: "🎨", delay: 0.5, x: 70, y: 60 },
    { emoji: "💻", delay: 1, x: 10, y: 80 },
    { emoji: "🎵", delay: 1.5, x: 85, y: 20 },
    { emoji: "📱", delay: 2, x: 45, y: 90 },
    { emoji: "✨", delay: 2.5, x: 60, y: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {seals.map((seal, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${seal.x}%`,
            top: `${seal.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: seal.delay,
          }}
        >
          {seal.emoji}
        </motion.div>
      ))}
    </div>
  );
}
