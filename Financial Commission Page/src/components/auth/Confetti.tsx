import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#FF6B35", "#4ECDC4", "#FFE5DC", "#95E1D3", "#FFA07A"];
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        rotation: Math.random() * 360,
      });
    }

    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: "-10%",
            backgroundColor: piece.color,
          }}
          initial={{
            y: 0,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            rotate: piece.rotation,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
