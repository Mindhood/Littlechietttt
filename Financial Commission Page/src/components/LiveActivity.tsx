import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Activity, Zap } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Carlos M.",
    avatar: "https://images.unsplash.com/photo-1547050739-3aa6b3d829e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjM1NjAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    action: "ganó",
    amount: "$125",
    project: "Logo para Gaming",
    time: "Hace 2 min",
    type: "earning",
  },
  {
    id: 2,
    user: "Luna C.",
    avatar: "https://images.unsplash.com/photo-1758611973102-97b6b465ce20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzU2MDM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    action: "completó",
    project: "Diseño de App",
    time: "Hace 5 min",
    type: "completed",
  },
  {
    id: 3,
    user: "Emma T.",
    avatar: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNTYwMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    action: "ganó",
    amount: "$85",
    project: "Ilustración Digital",
    time: "Hace 8 min",
    type: "earning",
  },
  {
    id: 4,
    user: "Max R.",
    avatar: "https://images.unsplash.com/photo-1658052408504-2ce6a8b11d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYzNTM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    action: "aplicó a",
    project: "Desarrollo Web",
    time: "Hace 12 min",
    type: "applied",
  },
  {
    id: 5,
    user: "Ana L.",
    avatar: "https://images.unsplash.com/photo-1547050739-3aa6b3d829e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjM1NjAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    action: "ganó",
    amount: "$200",
    project: "Edición de Video",
    time: "Hace 15 min",
    type: "earning",
  },
  {
    id: 6,
    user: "Diego P.",
    avatar: "https://images.unsplash.com/photo-1758611973102-97b6b465ce20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzU2MDM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    action: "completó",
    project: "Arte Manga",
    time: "Hace 20 min",
    type: "completed",
  },
];

export function LiveActivity() {
  return (
    <div className="sticky top-24">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4ECDC4] to-[#95E1D3] flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3>Actividad en Vivo</h3>
            <p className="text-sm text-gray-500">Lo que está pasando ahora</p>
          </div>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors animate-in fade-in slide-in-from-top-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Avatar className="w-10 h-10 ring-2 ring-white shadow">
                <AvatarImage src={activity.avatar} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-sm truncate">
                    <span>{activity.user}</span>
                    <span className="text-gray-500"> {activity.action} </span>
                    {activity.amount && (
                      <span className="text-[#4ECDC4]">{activity.amount}</span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate mb-1">{activity.project}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{activity.time}</span>
                  {activity.type === "earning" && (
                    <Badge className="bg-[#E5F9F7] text-[#4ECDC4] text-xs px-2 py-0 border-0">
                      💰 Ganancia
                    </Badge>
                  )}
                  {activity.type === "completed" && (
                    <Badge className="bg-green-50 text-green-600 text-xs px-2 py-0 border-0">
                      ✅ Completado
                    </Badge>
                  )}
                  {activity.type === "applied" && (
                    <Badge className="bg-[#FFE5DC] text-[#FF6B35] text-xs px-2 py-0 border-0">
                      ⚡ Aplicado
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live indicator */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse"></div>
            <span>Actualizando en tiempo real</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
