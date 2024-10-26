import React from 'react';
import { MapPin, Briefcase, Search as SearchIcon, Filter } from 'lucide-react';

interface SearchFiltersProps {
  searchParams: {
    location: string;
    radius: string;
    practiceArea: string;
    keyword: string;
    experience: string;
    rating: string;
    language: string;
  };
  showFilters: boolean;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onToggleFilters: () => void;
}

export default function SearchFilters({
  searchParams,
  showFilters,
  onSearchChange,
  onToggleFilters
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Location and Radius Search */}
        <div className="space-y-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                id="location"
                placeholder="City, County, or ZIP code"
                value={searchParams.location}
                onChange={onSearchChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="radius" className="block text-sm font-medium text-gray-700">Search Radius</label>
            <select
              name="radius"
              id="radius"
              value={searchParams.radius}
              onChange={onSearchChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
            >
              <option value="5">Within 5 miles</option>
              <option value="10">Within 10 miles</option>
              <option value="25">Within 25 miles</option>
              <option value="50">Within 50 miles</option>
              <option value="100">Within 100 miles</option>
            </select>
          </div>
        </div>
        
        {/* Practice Area */}
        <div>
          <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-700">Practice Area</label>
          <div className="mt-1 relative">
            <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              name="practiceArea"
              id="practiceArea"
              value={searchParams.practiceArea}
              onChange={onSearchChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
            >
              <option value="">All Practice Areas</option>
              <option value="Family Law">Family Law</option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="Business Law">Business Law</option>
              <option value="Personal Injury">Personal Injury</option>
              <option value="Estate Planning">Estate Planning</option>
              <option value="Immigration">Immigration</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Employment Law">Employment Law</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Tax Law">Tax Law</option>
              <option value="Civil Litigation">Civil Litigation</option>
            </select>
          </div>
        </div>
        
        {/* Keyword Search */}
        <div>
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">Keyword</label>
          <div className="mt-1 relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Search by name, firm, or keyword"
              value={searchParams.keyword}
              onChange={onSearchChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mt-4">
        <button
          onClick={onToggleFilters}
          className="flex items-center space-x-2 text-gray-600"
        >
          <Filter className="h-5 w-5" />
          <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>
      
      {/* Advanced Filters */}
      <div className={`${showFilters ? 'block' : 'hidden md:grid'} md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200`}>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
          <select
            name="experience"
            id="experience"
            value={searchParams.experience}
            onChange={onSearchChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Any Experience</option>
            <option value="1-5">1-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10-15">10-15 years</option>
            <option value="15-20">15-20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            name="rating"
            id="rating"
            value={searchParams.rating}
            onChange={onSearchChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Any Rating</option>
            <option value="4.5+">4.5+ stars</option>
            <option value="4+">4+ stars</option>
            <option value="3.5+">3.5+ stars</option>
            <option value="3+">3+ stars</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          <select
            name="language"
            id="language"
            value={searchParams.language}
            onChange={onSearchChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Any Language</option>
            <option value="Spanish">Spanish</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Russian">Russian</option>
            <option value="Korean">Korean</option>
            <option value="Arabic">Arabic</option>
            <option value="ASL">American Sign Language</option>
          </select>
        </div>
      </div>
    </div>
  );
}