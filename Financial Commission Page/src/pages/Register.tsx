import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Wallet,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Gamepad2,
  Palette,
  Music,
  Video,
  Code,
  Camera,
  Sparkles,
  TrendingUp,
  BookOpen,
  Mic,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { SealLogo } from "../components/SealLogo";
import { RoleCard } from "../components/auth/RoleCard";
import { BadgeSelector } from "../components/auth/BadgeSelector";
import { PasswordStrength } from "../components/auth/PasswordStrength";
import { ProgressSteps } from "../components/auth/ProgressSteps";
import { SealIllustration } from "../components/auth/SealIllustration";
import { Confetti } from "../components/auth/Confetti";
import { FloatingSeals } from "../components/auth/FloatingSeals";

interface RegisterProps {
  onLoginClick: () => void;
  onRegisterSuccess: () => void;
}

const INTEREST_BADGES = [
  { id: "gaming", icon: Gamepad2, label: "Gaming" },
  { id: "art", icon: Palette, label: "Arte Digital" },
  { id: "music", icon: Music, label: "Música" },
  { id: "video", icon: Video, label: "Edición Video" },
  { id: "code", icon: Code, label: "Programación" },
  { id: "photo", icon: Camera, label: "Fotografía" },
  { id: "design", icon: Sparkles, label: "Diseño" },
  { id: "marketing", icon: TrendingUp, label: "Marketing" },
  { id: "writing", icon: BookOpen, label: "Escritura" },
  { id: "voice", icon: Mic, label: "Locución" },
];

const STEPS = [
  { label: "Rol" },
  { label: "Datos" },
  { label: "Intereses" },
  { label: "¡Listo!" },
];

export function Register({ onLoginClick, onRegisterSuccess }: RegisterProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [role, setRole] = useState<"creator" | "client" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBadgeToggle = (badgeId: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badgeId)
        ? prev.filter((id) => id !== badgeId)
        : [...prev, badgeId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate registration
    setTimeout(() => {
      handleNext();
      setIsSubmitting(false);
    }, 1500);
  };

  const canProceedStep1 = role !== null;
  const canProceedStep2 =
    formData.username && formData.email && formData.password.length >= 8;
  const canProceedStep3 = selectedBadges.length >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-white to-secondary/10 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingSeals />
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <SealLogo className="w-12 h-12 text-primary" />
            <h1 className="text-primary">LittleWork</h1>
          </div>
          <p className="text-muted-foreground">
            Únete a la colonia de trabajadores freelance
          </p>
        </div>

        {/* Progress steps */}
        <div className="mb-8">
          <ProgressSteps steps={STEPS} currentStep={currentStep} />
        </div>

        {/* Form container */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50"
          layout
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Choose Role */}
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2>¿Cómo quieres participar?</h2>
                  <p className="text-muted-foreground">
                    Selecciona tu rol en la comunidad
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <RoleCard
                    icon={Briefcase}
                    title="Creador"
                    description="Ofrece tus talentos y gana dinero con tus habilidades"
                    sealIllustration="🎨"
                    isSelected={role === "creator"}
                    onClick={() => setRole("creator")}
                  />
                  <RoleCard
                    icon={Wallet}
                    title="Cliente"
                    description="Encuentra talento joven para tus proyectos"
                    sealIllustration="💼"
                    isSelected={role === "client"}
                    onClick={() => setRole("client")}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleNext}
                    disabled={!canProceedStep1}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Continuar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2>Crea tu cuenta</h2>
                  <p className="text-muted-foreground">
                    Completa tus datos básicos
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username">Nombre de usuario</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="tunombre"
                        className="pl-11 bg-input-background border-border"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                      />
                    </div>
                    {formData.username && (
                      <p className="text-sm text-muted-foreground">
                        Tu perfil será: littlework.com/@{formData.username}
                      </p>
                    )}
                  </div>

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
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                        placeholder="Mínimo 8 caracteres"
                        className="pl-11 pr-11 bg-input-background border-border"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
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
                    <PasswordStrength password={formData.password} />
                  </div>

                  {/* Age notice */}
                  <div className="bg-accent/50 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-foreground">
                      💡 <strong>Para menores de edad:</strong> Necesitarás autorización de
                      un tutor para trabajar y recibir pagos.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="border-border"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Continuar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2>Personaliza tu perfil</h2>
                  <p className="text-muted-foreground">
                    Selecciona tus áreas de interés
                  </p>
                </div>

                <BadgeSelector
                  badges={INTEREST_BADGES}
                  selectedBadges={selectedBadges}
                  onToggle={handleBadgeToggle}
                  maxSelection={5}
                />

                {/* Profile preview */}
                {selectedBadges.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-accent/50 to-secondary/10 rounded-xl p-6 border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-3">
                      Vista previa de tu perfil:
                    </p>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-2xl">🦭</span>
                      </div>
                      <div className="flex-1">
                        <h3>@{formData.username || "usuario"}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedBadges.map((badgeId) => {
                            const badge = INTEREST_BADGES.find((b) => b.id === badgeId);
                            return badge ? (
                              <span
                                key={badgeId}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                              >
                                <badge.icon className="w-3 h-3" />
                                {badge.label}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="border-border"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceedStep3 || isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Welcome */}
            {currentStep === 3 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center space-y-6 py-8"
              >
                <Confetti />
                <SealIllustration mood="celebrating" className="w-48 h-48 mx-auto" />
                
                <div className="space-y-2">
                  <h1 className="text-primary">
                    ¡Bienvenido a LittleWork, {formData.username}! 🦭
                  </h1>
                  <p className="text-muted-foreground">
                    Tu cuenta ha sido creada exitosamente
                  </p>
                </div>

                {/* Achievement unlocked */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Sparkles className="w-6 h-6" />
                    <h3 className="text-white">¡Badge Desbloqueado!</h3>
                  </div>
                  <p className="text-white/90">Explorador - 50 XP</p>
                  <p className="text-sm text-white/75 mt-2">
                    Primera misión: Completa tu perfil
                  </p>
                </motion.div>

                {/* Next steps */}
                <div className="bg-accent/50 rounded-xl p-6 text-left space-y-3">
                  <h3>Próximos pasos:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Completa tu perfil con foto y descripción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        {role === "creator"
                          ? "Crea tu primer servicio"
                          : "Explora creadores talentosos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Únete a la comunidad en Discord</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={onRegisterSuccess}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Comenzar mi aventura 🚀
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Login link */}
        {currentStep < 3 && (
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              ¿Ya tienes cuenta?{" "}
              <button
                onClick={onLoginClick}
                className="text-primary hover:underline"
              >
                Inicia sesión
              </button>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}