import { Bell, Search, MessageSquare, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="hidden sm:block">ComisionPro</span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Buscar trabajos, personas, proyectos..."
              className="pl-10"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center rounded-full">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center rounded-full bg-red-500">
                5
              </Badge>
            </Button>
            <Button className="hidden sm:flex">Publicar Trabajo</Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex gap-6 mt-4 -mb-3">
          <button
            onClick={() => setActiveTab("feed")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "feed"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab("mis-proyectos")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "mis-proyectos"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Mis Proyectos
          </button>
          <button
            onClick={() => setActiveTab("finanzas")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "finanzas"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Finanzas
          </button>
          <button
            onClick={() => setActiveTab("red")}
            className={`pb-3 border-b-2 transition-colors hidden sm:block ${
              activeTab === "red"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Mi Red
          </button>
        </nav>
      </div>
    </header>
  );
}
