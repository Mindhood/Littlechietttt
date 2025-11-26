import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface Badge {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface BadgeSelectorProps {
  badges: Badge[];
  selectedBadges: string[];
  onToggle: (id: string) => void;
  maxSelection?: number;
}

export function BadgeSelector({
  badges,
  selectedBadges,
  onToggle,
  maxSelection = 5,
}: BadgeSelectorProps) {
  const isMaxSelected = selectedBadges.length >= maxSelection;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Selecciona hasta {maxSelection} intereses
        </p>
        <span className="text-primary">
          {selectedBadges.length}/{maxSelection}
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((badge) => {
          const isSelected = selectedBadges.includes(badge.id);
          const isDisabled = !isSelected && isMaxSelected;
          const Icon = badge.icon;

          return (
            <motion.button
              key={badge.id}
              onClick={() => !isDisabled && onToggle(badge.id)}
              disabled={isDisabled}
              className={`relative p-4 rounded-xl border-2 transition-all ${
                isSelected
                  ? "bg-primary border-primary text-white shadow-lg"
                  : isDisabled
                  ? "bg-muted/50 border-border text-muted-foreground cursor-not-allowed"
                  : "bg-white border-border hover:border-primary/50 text-foreground"
              }`}
              whileHover={!isDisabled ? { scale: 1.05 } : {}}
              whileTap={!isDisabled ? { scale: 0.95 } : {}}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6" />
                <span className="text-sm text-center">{badge.label}</span>
              </div>
              
              {isSelected && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <svg
                    className="w-3 h-3 text-white"
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
        })}
      </div>
    </div>
  );
}
