import { motion } from "motion/react";

interface SealIllustrationProps {
  mood?: "happy" | "working" | "celebrating" | "clapping";
  className?: string;
}

export function SealIllustration({ mood = "happy", className = "" }: SealIllustrationProps) {
  const animations = {
    happy: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    working: {
      rotate: [0, -5, 5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    celebrating: {
      scale: [1, 1.1, 1],
      rotate: [0, -10, 10, 0],
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
    },
    clapping: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      animate={animations[mood]}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="100" cy="100" r="90" fill="#FFE5DC" opacity="0.3" />
        
        {/* Body */}
        <ellipse
          cx="100"
          cy="120"
          rx="45"
          ry="55"
          fill="#FF6B35"
        />
        
        {/* Head */}
        <ellipse
          cx="75"
          cy="90"
          rx="25"
          ry="30"
          fill="#FF6B35"
        />
        
        {/* Snout */}
        <ellipse
          cx="60"
          cy="95"
          rx="10"
          ry="8"
          fill="#FF8A5B"
        />
        
        {/* Nose */}
        <circle cx="58" cy="95" r="3" fill="#333" />
        
        {/* Eyes */}
        <circle cx="75" cy="85" r="5" fill="white" />
        <circle cx="76" cy="85" r="3" fill="#333" />
        
        {/* Highlight in eye */}
        <circle cx="77" cy="84" r="1.5" fill="white" />
        
        {/* Front flippers */}
        <motion.ellipse
          cx="70"
          cy="150"
          rx="12"
          ry="25"
          fill="#FF8A5B"
          transform="rotate(-30 70 150)"
          animate={mood === "clapping" ? { rotate: [-30, -10, -30] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        
        <motion.ellipse
          cx="90"
          cy="155"
          rx="12"
          ry="25"
          fill="#FF8A5B"
          transform="rotate(20 90 155)"
          animate={mood === "clapping" ? { rotate: [20, 40, 20] } : {}}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
        />
        
        {/* Back flippers */}
        <ellipse
          cx="130"
          cy="140"
          rx="15"
          ry="20"
          fill="#FF6B35"
          transform="rotate(45 130 140)"
        />
        
        {/* Tail */}
        <path
          d="M 135 130 Q 155 125 165 135 Q 155 140 145 135 Z"
          fill="#FF6B35"
        />
        
        {/* Whiskers */}
        <line x1="60" y1="92" x2="45" y2="90" stroke="#333" strokeWidth="1" />
        <line x1="60" y1="95" x2="45" y2="95" stroke="#333" strokeWidth="1" />
        <line x1="60" y1="98" x2="45" y2="100" stroke="#333" strokeWidth="1" />
        
        {/* Smile (for happy mood) */}
        {mood === "happy" || mood === "celebrating" ? (
          <path
            d="M 65 100 Q 70 105 75 100"
            stroke="#333"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        ) : null}
        
        {/* Confetti for celebrating */}
        {mood === "celebrating" && (
          <>
            <motion.circle
              cx="50"
              cy="50"
              r="3"
              fill="#4ECDC4"
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.circle
              cx="150"
              cy="60"
              r="3"
              fill="#FF6B35"
              animate={{ y: [0, 25], opacity: [1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.rect
              x="120"
              y="40"
              width="4"
              height="4"
              fill="#FFE5DC"
              animate={{ y: [0, 30], opacity: [1, 0], rotate: [0, 180] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}
