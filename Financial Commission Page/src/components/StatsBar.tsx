import { TrendingUp, Users, DollarSign, Briefcase } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Jóvenes Activos",
      color: "from-[#FF6B35] to-[#FF8F6B]",
    },
    {
      icon: Briefcase,
      value: "8,500+",
      label: "Proyectos Completados",
      color: "from-[#4ECDC4] to-[#95E1D3]",
    },
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Ganado por Teens",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Satisfacción",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
