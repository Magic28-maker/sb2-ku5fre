import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Shield, HeartPulse, Briefcase, 
  Home, Scroll, Building, Globe 
} from 'lucide-react';

const iconMap = {
  'users': Users,
  'shield': Shield,
  'heart-pulse': HeartPulse,
  'briefcase': Briefcase,
  'home': Home,
  'scroll': Scroll,
  'building': Building,
  'globe': Globe
};

interface PracticeAreaCardProps {
  area: {
    id: string;
    name: string;
    description: string;
    icon: keyof typeof iconMap;
    subCategories: string[];
  };
  featured?: boolean;
}

export default function PracticeAreaCard({ area, featured = false }: PracticeAreaCardProps) {
  const Icon = iconMap[area.icon];

  return (
    <Link
      to={`/practice-areas/${area.id}`}
      className={`block p-6 rounded-lg transition duration-200 ${
        featured
          ? 'bg-white shadow-md hover:shadow-lg'
          : 'bg-white/50 hover:bg-white hover:shadow-md'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{area.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{area.description}</p>
          <div className="flex flex-wrap gap-2">
            {area.subCategories.slice(0, 3).map((sub) => (
              <span
                key={sub}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {sub}
              </span>
            ))}
            {area.subCategories.length > 3 && (
              <span className="text-xs px-2 py-1 text-blue-600">
                +{area.subCategories.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}