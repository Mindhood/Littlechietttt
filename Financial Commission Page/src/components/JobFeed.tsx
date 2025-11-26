import { JobCard } from "./JobCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";

interface JobFeedProps {
  activeTab: string;
}

const mockJobs = [
  {
    id: 1,
    author: {
      name: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjM1MzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role: "Startup de FinTech",
      verified: true,
    },
    title: "Diseño de App Mobile para Banca Digital",
    description: "Buscamos un diseñador UX/UI experimentado para crear una aplicación bancaria innovadora. Necesitamos wireframes, prototipos interactivos y diseño visual completo.",
    budget: "$5,000 - $8,000",
    commission: "20%",
    duration: "6 semanas",
    skills: ["Figma", "UX Design", "Mobile UI", "Prototipado"],
    postedTime: "Hace 2 horas",
    proposals: 12,
    likes: 24,
    image: "https://images.unsplash.com/photo-1700451761308-ec56f93c82be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzQ0NTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    author: {
      name: "Global Marketing Co.",
      avatar: "https://images.unsplash.com/photo-1582787264299-66a617fcc6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwd29ya2luZ3xlbnwxfHx8fDE3NjM1NTk3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role: "Agencia de Marketing",
      verified: true,
    },
    title: "Campaña de Redes Sociales - E-commerce",
    description: "Proyecto de 3 meses para gestionar redes sociales de marca de moda. Incluye creación de contenido, diseño gráfico y análisis de métricas.",
    budget: "$3,000/mes",
    commission: "15%",
    duration: "3 meses",
    skills: ["Social Media", "Copywriting", "Diseño Gráfico", "Analytics"],
    postedTime: "Hace 5 horas",
    proposals: 28,
    likes: 45,
    image: null,
  },
  {
    id: 3,
    author: {
      name: "Eduardo Silva",
      avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzU1OTcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      role: "Product Manager",
      verified: false,
    },
    title: "Desarrollo Web - Dashboard Analítico",
    description: "Necesito desarrollador frontend para crear un dashboard con visualización de datos en tiempo real. React + TypeScript + D3.js preferiblemente.",
    budget: "$4,500",
    commission: "18%",
    duration: "4 semanas",
    skills: ["React", "TypeScript", "D3.js", "Dashboard"],
    postedTime: "Hace 1 día",
    proposals: 34,
    likes: 56,
    image: null,
  },
  {
    id: 4,
    author: {
      name: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjM1MzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role: "Consultora Tecnológica",
      verified: true,
    },
    title: "Consultoría UX para Plataforma SaaS",
    description: "Proyecto de mejora de experiencia de usuario para plataforma B2B. Incluye research, testing de usuarios y optimización de flujos.",
    budget: "$6,000 - $9,000",
    commission: "22%",
    duration: "8 semanas",
    skills: ["UX Research", "User Testing", "Wireframing", "Strategy"],
    postedTime: "Hace 2 días",
    proposals: 19,
    likes: 38,
    image: null,
  },
];

export function JobFeed({ activeTab }: JobFeedProps) {
  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Ordenar por
          </Button>
          <div className="flex-1" />
          <select className="px-3 py-1.5 border rounded-lg text-sm">
            <option>Todos los presupuestos</option>
            <option>$0 - $3,000</option>
            <option>$3,000 - $7,000</option>
            <option>$7,000+</option>
          </select>
        </div>
      </Card>

      {/* Job Cards */}
      <div className="space-y-4">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-4">
        <Button variant="outline">Cargar más trabajos</Button>
      </div>
    </div>
  );
}
