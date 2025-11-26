import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface JobCardProps {
  job: {
    id: number;
    author: {
      name: string;
      avatar: string;
      role: string;
      verified: boolean;
    };
    title: string;
    description: string;
    budget: string;
    commission: string;
    duration: string;
    skills: string[];
    postedTime: string;
    proposals: number;
    likes: number;
    image?: string | null;
  };
}

export function JobCard({ job }: JobCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(job.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <Avatar className="w-12 h-12">
            <AvatarImage src={job.author.avatar} />
            <AvatarFallback>{job.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span>{job.author.name}</span>
              {job.author.verified && (
                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-600" />
              )}
            </div>
            <p className="text-gray-500 text-sm">{job.author.role}</p>
            <p className="text-gray-400 text-xs mt-1">{job.postedTime}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSaved(!isSaved)}
        >
          <Bookmark
            className={`w-5 h-5 ${isSaved ? "fill-blue-600 text-blue-600" : ""}`}
          />
        </Button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <div className="mb-2">{job.title}</div>
        <p className="text-gray-600 mb-4">{job.description}</p>

        {job.image && (
          <ImageWithFallback
            src={job.image}
            alt={job.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Financial Info */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4">
          <div>
            <div className="text-xs text-gray-600 mb-1">Presupuesto</div>
            <div className="text-sm">{job.budget}</div>
          </div>
          <div>
            <div className="text-xs text-gray-600 mb-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Comisión
            </div>
            <div className="text-sm text-green-600">{job.commission}</div>
          </div>
          <div>
            <div className="text-xs text-gray-600 mb-1">Duración</div>
            <div className="text-sm">{job.duration}</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? "fill-red-600 text-red-600" : ""}`}
            />
            <span className="text-sm">{likesCount}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{job.proposals}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <Button>Enviar Propuesta</Button>
      </div>
    </Card>
  );
}
