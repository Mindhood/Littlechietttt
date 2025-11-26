import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Step {
  label: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        {/* Progress bar background */}
        <div className="absolute top-5 left-0 w-full h-1 bg-muted -z-10" />
        
        {/* Animated progress bar */}
        <motion.div
          className="absolute top-5 left-0 h-1 bg-primary -z-10"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isCompleted
                    ? "bg-primary border-primary text-white"
                    : isCurrent
                    ? "bg-white border-primary text-primary"
                    : "bg-white border-muted text-muted-foreground"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </motion.div>
              <span
                className={`mt-2 text-sm ${
                  isCurrent || isCompleted
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
