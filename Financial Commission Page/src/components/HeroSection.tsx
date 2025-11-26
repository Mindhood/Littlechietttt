import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, TrendingUp, Sparkles, Rocket, Star } from "lucide-react";
import { Badge } from "./ui/badge";

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFE5DC]/30 to-[#E5F9F7]/40">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-[#FF6B35]/20">
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-gray-700">+10k adolescentes ganando dinero</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl leading-tight">
                Gana dinero con
                <span className="block bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
                  tus habilidades 🚀
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Únete a la comunidad de jóvenes freelancers más vibrante. 
                Comparte tu talento, gana dinero y construye tu futuro desde hoy.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Buscar proyectos: diseño, código, música..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                />
              </div>
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white px-8 rounded-xl">
                Buscar
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ganancias promedio</div>
                  <div className="text-lg text-[#FF6B35]">$850/mes</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#95E1D3] flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Proyectos activos</div>
                  <div className="text-lg text-[#4ECDC4]">2,450+</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] hover:from-[#FF8F6B] hover:to-[#FF6B35] text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                onClick={onRegisterClick}
              >
                Crear Cuenta Gratis
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                Ver Proyectos
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 mb-4"></div>
                <h4>Diseño UI/UX</h4>
                <p className="text-gray-500 text-sm mb-3">Crea interfaces increíbles</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#FFE5DC] text-[#FF6B35]">$25-50/hr</Badge>
                  <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  <span className="text-sm">4.9</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 mt-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 mb-4"></div>
                <h4>Programación</h4>
                <p className="text-gray-500 text-sm mb-3">Desarrolla apps y webs</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#E5F9F7] text-[#4ECDC4]">$30-60/hr</Badge>
                  <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  <span className="text-sm">5.0</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-400 mb-4"></div>
                <h4>Ilustración</h4>
                <p className="text-gray-500 text-sm mb-3">Arte digital y dibujos</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#FFE5DC] text-[#FF6B35]">$20-45/hr</Badge>
                  <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  <span className="text-sm">4.8</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 mt-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 mb-4"></div>
                <h4>Edición Video</h4>
                <p className="text-gray-500 text-sm mb-3">TikTok, YouTube & más</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#E5F9F7] text-[#4ECDC4]">$25-55/hr</Badge>
                  <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  <span className="text-sm">4.9</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B]"></div>
                <div>
                  <div className="text-sm">María acaba de ganar</div>
                  <div className="text-[#FF6B35]">+$125 💰</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}