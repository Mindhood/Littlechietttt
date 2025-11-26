import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { SealLogo } from "../components/SealLogo";
import { SealIllustration } from "../components/auth/SealIllustration";
import { FloatingSeals } from "../components/auth/FloatingSeals";

interface LoginProps {
  onRegisterClick: () => void;
  onLoginSuccess: () => void;
}

export function Login({ onRegisterClick, onLoginSuccess }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      setShowCelebration(true);
      
      // Show celebration for 1.5s then redirect
      setTimeout(() => {
        onLoginSuccess();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-white to-secondary/10 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingSeals />
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-6">
          <SealIllustration mood={showCelebration ? "clapping" : "happy"} className="w-80 h-80" />
          <div className="text-center space-y-2">
            <h2 className="text-primary">¡Regresa a la Colonia!</h2>
            <p className="text-muted-foreground">
              Tu comunidad de trabajo freelance te espera
            </p>
          </div>
        </div>

        {/* Right side - Login form */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <SealLogo className="w-10 h-10 text-primary" />
            <h1 className="text-primary">LittleWork</h1>
          </div>

          <div className="space-y-6">
            <div>
              <h2>Inicia Sesión</h2>
              <p className="text-muted-foreground mt-2">
                Bienvenido de vuelta a tu espacio de trabajo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    className="pl-11 bg-input-background border-border"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-11 pr-11 bg-input-background border-border"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-secondary hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Ingresando..." : "Ingresar"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-muted-foreground">
                  O continúa con
                </span>
              </div>
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="border-border hover:bg-accent"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-border hover:bg-accent"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </Button>
            </div>

            {/* Register link */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-muted-foreground">
                ¿No tienes cuenta?{" "}
                <button
                  onClick={onRegisterClick}
                  className="text-primary hover:underline"
                >
                  Únete a la colonia
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Celebration overlay */}
      {showCelebration && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl p-8 text-center space-y-4"
          >
            <SealIllustration mood="clapping" className="w-32 h-32 mx-auto" />
            <h2 className="text-primary">¡Bienvenido de vuelta! 🦭</h2>
            <p className="text-muted-foreground">Redirigiendo al dashboard...</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}