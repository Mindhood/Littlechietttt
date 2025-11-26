import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  sealIllustration: string;
  isSelected: boolean;
  onClick: () => void;
}

export function RoleCard({
  icon: Icon,
  title,
  description,
  sealIllustration,
  isSelected,
  onClick,
}: RoleCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all ${
        isSelected
          ? "bg-primary text-white shadow-xl ring-4 ring-primary/30"
          : "bg-white border-2 border-border hover:border-primary/50"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative z-10">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
            isSelected ? "bg-white/20" : "bg-accent"
          }`}
        >
          <Icon className={`w-7 h-7 ${isSelected ? "text-white" : "text-primary"}`} />
        </div>
        <h3 className={isSelected ? "text-white" : "text-foreground"}>{title}</h3>
        <p className={`mt-2 ${isSelected ? "text-white/90" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>
      
      {/* Seal illustration */}
      <div className="absolute bottom-0 right-0 text-6xl opacity-20">
        {sealIllustration}
      </div>
      
      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
