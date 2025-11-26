import { UserPlus, Search, Handshake, DollarSign } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Crea tu perfil",
      description: "Regístrate gratis y muestra tus habilidades al mundo",
      color: "from-[#FF6B35] to-[#FF8F6B]",
      emoji: "🎨",
    },
    {
      icon: Search,
      title: "Encuentra proyectos",
      description: "Explora miles de gigs que se ajustan a tu talento",
      color: "from-purple-500 to-pink-500",
      emoji: "🔍",
    },
    {
      icon: Handshake,
      title: "Aplica y colabora",
      description: "Conecta con clientes y trabaja en lo que amas",
      color: "from-[#4ECDC4] to-[#95E1D3]",
      emoji: "🤝",
    },
    {
      icon: DollarSign,
      title: "Recibe tu pago",
      description: "Gana dinero seguro con pagos protegidos",
      color: "from-green-500 to-emerald-500",
      emoji: "💰",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#FFE5DC] text-[#FF6B35] border-0 px-4 py-2">
            Súper fácil
          </Badge>
          <h2 className="mb-4">¿Cómo funciona LittleWork?</h2>
          <p className="text-xl text-gray-600">
            Empieza a ganar dinero en 4 simples pasos
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0"></div>
              )}

              <div className="relative z-10 text-center space-y-4">
                {/* Icon Circle */}
                <div className={`w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform`}>
                  <div className="text-6xl">{step.emoji}</div>
                </div>

                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] text-white">
                  {index + 1}
                </div>

                <h3>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm ${className}`}>
      {children}
    </span>
  );
}