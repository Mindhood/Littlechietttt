import { motion } from "motion/react";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    return strength;
  };

  const strength = calculateStrength();

  const levels = [
    { label: "Foca Bebé", color: "bg-destructive", textColor: "text-destructive" },
    { label: "Foca Joven", color: "bg-orange-400", textColor: "text-orange-400" },
    { label: "Foca Adulta", color: "bg-yellow-500", textColor: "text-yellow-500" },
    { label: "Foca Fuerte", color: "bg-secondary", textColor: "text-secondary" },
    { label: "Foca Gigante", color: "bg-green-500", textColor: "text-green-500" },
  ];

  if (!password) return null;

  const currentLevel = levels[strength] || levels[0];

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className={`h-1.5 flex-1 rounded-full ${
              index <= strength ? level.color : "bg-muted"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
      <p className={`${currentLevel.textColor}`}>
        Nivel: {currentLevel.label}
      </p>
    </div>
  );
}
