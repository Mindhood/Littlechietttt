import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { TrendingUp, Award, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileSidebar() {
  return (
    <div className="space-y-4 sticky top-24">
      {/* Profile Card */}
      <Card className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzU1OTcxNHww&ixlib=rb-4.1.0&q=80&w=1080" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <span className="mb-1">María Contreras</span>
          <p className="text-gray-500 text-sm mb-4">Diseñadora UX/UI Senior</p>
          
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Nivel Pro</span>
              <span className="text-gray-900">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>

        <div className="border-t mt-4 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Trabajos completados</span>
            <span>47</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Calificación</span>
            <span>4.9 ⭐</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Tasa de respuesta</span>
            <span>98%</span>
          </div>
        </div>
      </Card>

      {/* Earnings Card */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span>Ganancias del Mes</span>
        </div>
        
        <div className="mb-1">$12,450.00</div>
        <p className="text-green-600 text-sm mb-4">+23% vs mes anterior</p>

        <div className="space-y-3 pt-3 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Comisiones pendientes</span>
            <span className="text-orange-600">$3,200</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Próximo pago</span>
            <span>Nov 25</span>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-yellow-600" />
          <span>Logros Recientes</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg">
              🏆
            </div>
            <div className="flex-1 text-sm">
              <div>Top Freelancer</div>
              <p className="text-gray-500 text-xs">Q4 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
              ⚡
            </div>
            <div className="flex-1 text-sm">
              <div>Entrega Rápida</div>
              <p className="text-gray-500 text-xs">10 proyectos</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
