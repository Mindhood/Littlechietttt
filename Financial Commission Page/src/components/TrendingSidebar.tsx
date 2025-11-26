import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Users, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TrendingSidebar() {
  const trendingSkills = [
    { name: "React", growth: "+45%", color: "bg-blue-100 text-blue-700" },
    { name: "UI/UX Design", growth: "+38%", color: "bg-purple-100 text-purple-700" },
    { name: "Node.js", growth: "+32%", color: "bg-green-100 text-green-700" },
    { name: "Marketing Digital", growth: "+28%", color: "bg-orange-100 text-orange-700" },
    { name: "Ilustración", growth: "+25%", color: "bg-pink-100 text-pink-700" },
  ];

  const topFreelancers = [
    {
      name: "Ana Torres",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzU1OTcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      earnings: "$24,500",
    },
    {
      name: "Carlos Méndez",
      role: "Motion Designer",
      avatar: "https://images.unsplash.com/photo-1582787264299-66a617fcc6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwd29ya2luZ3xlbnwxfHx8fDE3NjM1NTk3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      earnings: "$19,800",
    },
    {
      name: "Laura Gómez",
      role: "Content Writer",
      avatar: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjM1MzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      earnings: "$16,200",
    },
  ];

  return (
    <div className="space-y-4 sticky top-24">
      {/* Trending Skills */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span>Habilidades en Tendencia</span>
        </div>
        
        <div className="space-y-3">
          {trendingSkills.map((skill, index) => (
            <div key={skill.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm w-4">{index + 1}</span>
                <Badge className={skill.color} variant="secondary">
                  {skill.name}
                </Badge>
              </div>
              <span className="text-green-600 text-sm">{skill.growth}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Freelancers */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-purple-600" />
          <span>Top del Mes</span>
        </div>
        
        <div className="space-y-4">
          {topFreelancers.map((freelancer, index) => (
            <div key={freelancer.name} className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={freelancer.avatar} />
                  <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate">{freelancer.name}</div>
                <p className="text-xs text-gray-500 truncate">{freelancer.role}</p>
              </div>
              <div className="text-sm text-green-600">{freelancer.earnings}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Active Projects */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <span>Estadísticas</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Proyectos activos</span>
            <span className="text-blue-600">1,248</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Nuevos esta semana</span>
            <span className="text-green-600">+156</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Tasa de éxito</span>
            <span>87%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Comisión promedio</span>
            <span className="text-purple-600">18.5%</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
