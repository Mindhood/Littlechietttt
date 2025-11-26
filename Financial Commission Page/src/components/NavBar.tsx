import { Button } from "./ui/button";
import { Menu, Search, Wallet, Bell, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { SealLogo } from "./SealLogo";

interface NavBarProps {
  onAuthClick?: () => void;
}

export function NavBar({ onAuthClick }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-xl flex items-center justify-center animate-pulse-glow">
                <SealLogo className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
              LittleWork
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Explorar
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Categorías
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Top Creadores
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Cómo Funciona
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-[#FFE5DC]">
              <Search className="w-5 h-5 text-gray-700" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-[#FFE5DC] relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
            </Button>

            <Button 
              variant="outline" 
              className="hidden md:flex gap-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
            >
              <Wallet className="w-4 h-4" />
              $2,450
            </Button>

            <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] hover:from-[#FF8F6B] hover:to-[#FF6B35] text-white"
              onClick={onAuthClick}
            >
              Empezar
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-700 hover:text-[#FF6B35] py-2">
                Explorar
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B35] py-2">
                Categorías
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B35] py-2">
                Top Creadores
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B35] py-2">
                Cómo Funciona
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}