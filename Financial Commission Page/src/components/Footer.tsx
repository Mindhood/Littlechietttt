import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Twitter, Youtube, MessageCircle, Zap } from "lucide-react";
import { SealLogo } from "./SealLogo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-xl flex items-center justify-center">
                <SealLogo className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
                LittleWork
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              La plataforma #1 para jóvenes freelancers. Gana dinero haciendo lo que amas.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-[#FF6B35] hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-[#FF6B35] hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-[#FF6B35] hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-[#FF6B35] hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <h4 className="mb-4 text-[#FF6B35]">Para Freelancers (esclavos)</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Encontrar Proyectos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h4 className="mb-4 text-[#4ECDC4]">Para Clientes (retrasados)</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contratar Talento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publicar Proyecto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guías</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe tips, proyectos y oportunidades semanales
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="tu@email.com" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B]">
                Suscribir
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 LittleWork. Hecho con odio para jóvenes creativos
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Ayuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
}