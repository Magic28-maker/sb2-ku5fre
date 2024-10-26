import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/SearchFilters';
import LawyerCard from '../components/LawyerCard';
import { useSearchParams } from 'react-router-dom';

// Mock data for demonstration
const mockLawyers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    firm: 'Johnson & Associates',
    practiceArea: 'Family Law',
    location: 'Portland',
    distance: 2.5,
    rating: 4.8,
    reviews: 127,
    experience: '15 years',
    languages: ['English', 'Spanish'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    badges: ['Top Rated', 'Super Lawyer'],
    barNumber: '123456',
    verified: true,
    consultationFee: 'Free Initial Consultation',
    hourlyRate: '$250-350/hour',
    availability: 'Available this week',
    expertise: ['Divorce', 'Child Custody', 'Mediation']
  },
  // Add more mock lawyers as needed
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState(mockLawyers);
  const [formData, setFormData] = useState({
    location: searchParams.get('location') || '',
    radius: searchParams.get('radius') || '10',
    practiceArea: searchParams.get('practiceArea') || '',
    keyword: searchParams.get('keyword') || '',
    experience: searchParams.get('experience') || '',
    rating: searchParams.get('rating') || '',
    language: searchParams.get('language') || ''
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSearchParams(prev => {
      if (value) {
        prev.set(name, value);
      } else {
        prev.delete(name);
      }
      return prev;
    });
  };

  // Filter lawyers based on search criteria
  useEffect(() => {
    // In a real app, this would be an API call
    let results = mockLawyers;

    if (formData.location) {
      results = results.filter(lawyer => 
        lawyer.location.toLowerCase().includes(formData.location.toLowerCase())
      );
    }

    if (formData.practiceArea) {
      results = results.filter(lawyer => 
        lawyer.practiceArea === formData.practiceArea ||
        lawyer.expertise.includes(formData.practiceArea)
      );
    }

    if (formData.keyword) {
      const keyword = formData.keyword.toLowerCase();
      results = results.filter(lawyer => 
        lawyer.name.toLowerCase().includes(keyword) ||
        lawyer.firm.toLowerCase().includes(keyword) ||
        lawyer.expertise.some(exp => exp.toLowerCase().includes(keyword))
      );
    }

    setFilteredLawyers(results);
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Oregon Attorneys</h1>
          <p className="text-xl text-gray-300">
            Search our directory of qualified legal professionals
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchFilters
          searchParams={formData}
          showFilters={showFilters}
          onSearchChange={handleSearchChange}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        {/* Results Section */}
        <div className="mt-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredLawyers.length} Attorneys Found
            </h2>
            <div className="flex items-center space-x-4">
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => {
                  // Add sorting functionality
                  console.log('Sort by:', e.target.value);
                }}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
                <option value="distance">Sort by Distance</option>
              </select>
            </div>
          </div>

          {filteredLawyers.length > 0 ? (
            <div className="space-y-6">
              {filteredLawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No attorneys found matching your criteria. Try adjusting your search filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}