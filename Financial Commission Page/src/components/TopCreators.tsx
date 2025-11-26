import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy, Star, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const creators = [
  {
    rank: 1,
    name: "Luna Chen",
    age: 17,
    specialty: "Diseñadora UI/UX",
    avatar: "https://images.unsplash.com/photo-1758611973102-97b6b465ce20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzU2MDM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    earnings: "$3,250",
    rating: 5.0,
    projects: 48,
    badge: "🏆 MVP del Mes",
    badgeColor: "from-yellow-400 to-orange-500",
  },
  {
    rank: 2,
    name: "Max Rivera",
    age: 18,
    specialty: "Desarrollador Full Stack",
    avatar: "https://images.unsplash.com/photo-1547050739-3aa6b3d829e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjM1NjAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    earnings: "$2,890",
    rating: 5.0,
    projects: 42,
    badge: "⚡ Rising Star",
    badgeColor: "from-purple-400 to-pink-500",
  },
  {
    rank: 3,
    name: "Emma Torres",
    age: 16,
    specialty: "Ilustradora Digital",
    avatar: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNTYwMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    earnings: "$2,560",
    rating: 4.9,
    projects: 56,
    badge: "🎨 Artista Pro",
    badgeColor: "from-pink-400 to-red-500",
  },
  {
    rank: 4,
    name: "Alex Kim",
    age: 17,
    specialty: "Editor de Video",
    avatar: "https://images.unsplash.com/photo-1658052408504-2ce6a8b11d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYzNTM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    earnings: "$2,340",
    rating: 4.9,
    projects: 39,
    badge: "🎬 Creator",
    badgeColor: "from-blue-400 to-cyan-500",
  },
];

export function TopCreators() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2>Top Creadores del Mes</h2>
            <p className="text-gray-500">Los mejores freelancers jóvenes</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {creators.map((creator, index) => (
          <Card 
            key={creator.rank} 
            className={`p-6 hover:shadow-xl transition-all ${
              index === 0 ? "border-2 border-[#FF6B35] bg-gradient-to-r from-[#FFE5DC]/30 to-white" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Rank Badge */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${creator.badgeColor} flex items-center justify-center text-white flex-shrink-0`}>
                <span className="text-xl">#{creator.rank}</span>
              </div>

              {/* Avatar */}
              <Avatar className="w-16 h-16 ring-4 ring-white shadow-lg">
                <AvatarImage src={creator.avatar} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="truncate">{creator.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {creator.age} años
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-2">{creator.specialty}</p>
                <Badge className={`bg-gradient-to-r ${creator.badgeColor} text-white border-0 text-xs`}>
                  {creator.badge}
                </Badge>
              </div>

              {/* Stats */}
              <div className="hidden md:flex flex-col items-end gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  <span>{creator.rating}</span>
                </div>
                <div className="text-sm text-gray-500">{creator.projects} proyectos</div>
              </div>

              {/* Earnings */}
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Ganancia</div>
                <div className="text-xl text-[#4ECDC4]">{creator.earnings}</div>
                <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15%</span>
                </div>
              </div>

              {/* Follow Button */}
              <Button 
                variant="outline" 
                className="hidden lg:flex border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
              >
                Seguir
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button 
          variant="outline" 
          className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
        >
          Ver Ranking Completo
        </Button>
      </div>
    </div>
  );
}
