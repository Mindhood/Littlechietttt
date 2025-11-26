import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, MessageCircle, TrendingUp, Flame } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

const gigs = [
  {
    id: 1,
    title: "Necesito logo para mi canal de gaming 🎮",
    description: "Busco un diseñador que me ayude a crear un logo épico para mi canal de YouTube gaming. Estilo moderno y colorido!",
    budget: "$50-80",
    category: "Diseño",
    categoryColor: "bg-purple-100 text-purple-700",
    author: {
      name: "Carlos M.",
      age: 17,
      avatar: "https://images.unsplash.com/photo-1547050739-3aa6b3d829e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjM1NjAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    likes: 24,
    comments: 12,
    trending: true,
  },
  {
    id: 2,
    title: "Edición de videos para TikTok - contenido de baile",
    description: "Busco editor que domine transiciones y efectos cool para mis videos de baile. Pago semanal!",
    budget: "$100-150/semana",
    category: "Video",
    categoryColor: "bg-red-100 text-red-700",
    author: {
      name: "Ana L.",
      age: 16,
      avatar: "https://images.unsplash.com/photo-1758611973102-97b6b465ce20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzU2MDM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    likes: 45,
    comments: 23,
    trending: true,
  },
  {
    id: 3,
    title: "Página web para mi negocio de stickers",
    description: "Vendo stickers personalizados y necesito una web simple pero aesthetic. Debe tener carrito de compras.",
    budget: "$200-300",
    category: "Desarrollo",
    categoryColor: "bg-blue-100 text-blue-700",
    author: {
      name: "Sofia R.",
      age: 18,
      avatar: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNTYwMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: false,
    },
    likes: 67,
    comments: 34,
    trending: false,
  },
  {
    id: 4,
    title: "Ilustraciones para mi proyecto de anime 🎨",
    description: "Proyecto personal de cómic estilo manga. Necesito artista que sepa dibujar personajes anime.",
    budget: "$120-180",
    category: "Arte",
    categoryColor: "bg-pink-100 text-pink-700",
    author: {
      name: "Diego P.",
      age: 17,
      avatar: "https://images.unsplash.com/photo-1658052408504-2ce6a8b11d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYzNTM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    likes: 89,
    comments: 41,
    trending: true,
  },
];

export function TrendingGigs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] flex items-center justify-center">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2>Proyectos en Tendencia</h2>
            <p className="text-gray-500">Los gigs más populares ahora mismo</p>
          </div>
        </div>
        <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white">
          Ver Todos
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
}

function GigCard({ gig }: { gig: typeof gigs[0] }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(gig.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#FF6B35]/20">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <Avatar className="w-12 h-12 ring-2 ring-[#4ECDC4] ring-offset-2">
            <AvatarImage src={gig.author.avatar} />
            <AvatarFallback>{gig.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span>{gig.author.name}</span>
              {gig.author.verified && (
                <span className="text-lg">✓</span>
              )}
              <Badge variant="secondary" className="text-xs">
                {gig.author.age} años
              </Badge>
            </div>
            <div className="text-sm text-gray-500">Hace 2 horas</div>
          </div>
        </div>
        {gig.trending && (
          <Badge className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white border-0">
            <Flame className="w-3 h-3 mr-1" />
            Hot
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3 mb-4">
        <h3>{gig.title}</h3>
        <p className="text-gray-600">{gig.description}</p>

        <div className="flex flex-wrap gap-2">
          <Badge className={gig.categoryColor}>{gig.category}</Badge>
        </div>
      </div>

      {/* Budget */}
      <div className="mb-4 p-4 bg-gradient-to-r from-[#FFE5DC] to-[#E5F9F7] rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 mb-1">Presupuesto</div>
            <div className="text-xl text-[#FF6B35]">{gig.budget}</div>
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-[#4ECDC4]" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 transition-colors ${
              isLiked ? "text-[#FF6B35]" : "text-gray-600 hover:text-[#FF6B35]"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-[#FF6B35]" : ""}`} />
            <span className="text-sm">{likesCount}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{gig.comments}</span>
          </button>
        </div>
        <Button className="bg-gradient-to-r from-[#4ECDC4] to-[#95E1D3] hover:from-[#95E1D3] hover:to-[#4ECDC4] text-white">
          Aplicar Ahora
        </Button>
      </div>
    </Card>
  );
}
