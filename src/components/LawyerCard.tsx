import React from 'react';
import { MapPin, Star, Phone, Mail, Check, Award, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface LawyerCardProps {
  lawyer: {
    id: number;
    name: string;
    firm: string;
    practiceArea: string;
    location: string;
    distance: number;
    rating: number;
    reviews: number;
    experience: string;
    languages: string[];
    image: string;
    badges: string[];
    barNumber: string;
    verified: boolean;
    consultationFee: string;
    hourlyRate: string;
    availability: string;
    expertise: string[];
  };
}

export default function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
      itemScope 
      itemType="http://schema.org/Attorney"
    >
      <div className="flex flex-col sm:flex-row sm:space-x-6">
        {/* Profile Image & Verification */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <Link to={`/lawyer/${lawyer.id}`} className="relative inline-block">
            <img
              src={lawyer.image}
              alt={`${lawyer.name} - ${lawyer.practiceArea} Attorney in ${lawyer.location}`}
              className="w-32 h-32 rounded-lg object-cover"
              itemProp="image"
            />
            {lawyer.verified && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                <Check className="h-4 w-4" />
              </div>
            )}
          </Link>
          
          <div className="mt-2 space-y-1">
            {lawyer.badges.map((badge) => (
              <span
                key={badge}
                className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Lawyer Information */}
        <div className="flex-1">
          <div className="mb-4">
            <Link 
              to={`/lawyer/${lawyer.id}`} 
              className="group"
            >
              <h3 
                className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition"
                itemProp="name"
              >
                {lawyer.name}
              </h3>
            </Link>
            <p itemProp="worksFor" itemScope itemType="http://schema.org/LegalService">
              <span itemProp="name">{lawyer.firm}</span>
            </p>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Award className="h-4 w-4 mr-1" />
              <span>Oregon Bar #{lawyer.barNumber}</span>
              {lawyer.verified && (
                <span className="ml-2 text-green-600 flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Verified
                </span>
              )}
            </div>
          </div>

          {/* Rating & Location */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div 
              className="flex items-center space-x-2"
              itemProp="aggregateRating"
              itemScope
              itemType="http://schema.org/AggregateRating"
            >
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="font-semibold" itemProp="ratingValue">{lawyer.rating}</span>
              <span className="text-gray-600">
                (<span itemProp="reviewCount">{lawyer.reviews}</span> reviews)
              </span>
            </div>
            <div 
              className="flex items-center space-x-2"
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">
                <span itemProp="addressLocality">{lawyer.location}</span> ({lawyer.distance} miles)
              </span>
            </div>
          </div>

          {/* Practice Areas & Expertise */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Practice Areas</h4>
            <div className="flex flex-wrap gap-2">
              <span 
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                itemProp="serviceType"
              >
                {lawyer.practiceArea}
              </span>
              {lawyer.expertise.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  itemProp="knowsAbout"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <DollarSign className="h-4 w-4 text-gray-400 mb-1" />
              <span className="text-gray-600">{lawyer.consultationFee}</span>
            </div>
            <div>
              <Clock className="h-4 w-4 text-gray-400 mb-1" />
              <span className="text-gray-600">{lawyer.availability}</span>
            </div>
            <div className="col-span-2">
              <Mail className="h-4 w-4 text-gray-400 mb-1" />
              <Link
                to={`/lawyer/${lawyer.id}`}
                className="text-blue-600 hover:underline"
              >
                View Profile & Contact Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}