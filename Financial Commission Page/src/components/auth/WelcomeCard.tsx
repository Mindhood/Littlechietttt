import { motion } from "motion/react";
import { Trophy, Target, Users } from "lucide-react";

interface WelcomeCardProps {
  username: string;
  role: "creator" | "client" | null;
}

export function WelcomeCard({ username, role }: WelcomeCardProps) {
  const achievements = [
    {
      icon: Trophy,
      title: "Explorador",
      description: "Te uniste a LittleWork",
      xp: 50,
    },
    {
      icon: Target,
      title: "Primera Misión",
      description: "Completa tu perfil",
      xp: 100,
    },
    {
      icon: Users,
      title: "Social",
      description: "Únete a Discord",
      xp: 75,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-primary">¡Felicidades, {username}! 🎉</h2>
        <p className="text-muted-foreground">
          Has comenzado tu viaje en LittleWork
        </p>
      </div>

      <div className="grid gap-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-4 p-4 bg-accent/30 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4>{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
              <div className="text-right">
                <span className="text-primary">+{achievement.xp} XP</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Tu nivel actual</p>
            <h3>Nivel 1 - Principiante</h3>
          </div>
          <div className="text-right">
            <span className="text-2xl">🦭</span>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Progreso</span>
            <span className="text-primary">50 / 500 XP</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
        <h4 className="mb-2">💡 Consejo de foca:</h4>
        <p className="text-sm text-muted-foreground">
          {role === "creator"
            ? "Completa tu perfil con una buena descripción y portafolio para atraer más clientes."
            : "Explora los perfiles de creadores y revisa sus valoraciones antes de contratar."}
        </p>
      </div>
    </div>
  );
}
