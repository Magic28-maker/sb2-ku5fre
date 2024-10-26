import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Phone, Mail, Check, Award, Clock, DollarSign, Globe, MessageSquare, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Mock data - In a real app, this would come from an API
const lawyers = {
  1: {
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
    expertise: ['Divorce', 'Child Custody', 'Mediation'],
    bio: 'Sarah Johnson is a highly experienced family law attorney with over 15 years of practice in Oregon. She specializes in complex divorce cases and child custody matters, with a particular focus on mediation and collaborative divorce solutions.',
    education: [
      'J.D., Lewis & Clark Law School',
      'B.A., University of Oregon'
    ],
    admissions: [
      'Oregon State Bar',
      'U.S. District Court, District of Oregon'
    ],
    awards: [
      'Super Lawyers Rising Star 2018-2023',
      'Best Family Law Attorney - Portland Business Journal 2022'
    ],
    address: '1234 SW Morrison St, Suite 500',
    city: 'Portland',
    state: 'OR',
    zip: '97205',
    website: 'www.johnsonlawpdx.com',
    socialMedia: {
      linkedin: 'sarah-johnson-law',
      avvo: 'sarah-johnson'
    }
  },
  // Add more lawyer data as needed
};

export default function LawyerProfile() {
  const { id } = useParams();
  const lawyer = lawyers[Number(id)];

  if (!lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Lawyer Not Found</h2>
          <p className="text-gray-600">The requested lawyer profile does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${lawyer.name} - ${lawyer.practiceArea} Attorney in ${lawyer.location}`}</title>
        <meta name="description" content={`${lawyer.name} is a ${lawyer.practiceArea} attorney in ${lawyer.location} with ${lawyer.experience} of experience. Contact for ${lawyer.consultationFee}.`} />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-48 h-48 rounded-lg object-cover"
                />
                {lawyer.verified && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  {lawyer.badges.map((badge) => (
                    <span key={badge} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl font-bold mb-2">{lawyer.name}</h1>
                <p className="text-xl text-gray-300 mb-4">{lawyer.firm}</p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {lawyer.city}, {lawyer.state}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    {lawyer.rating} ({lawyer.reviews} reviews)
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    {lawyer.experience} Experience
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="btn-primary">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Now
                </button>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-600">{lawyer.bio}</p>
              </section>

              {/* Practice Areas */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Practice Areas</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                    {lawyer.practiceArea}
                  </span>
                  {lawyer.expertise.map((area) => (
                    <span key={area} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education & Admissions */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Education & Admissions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <ul className="space-y-2">
                      {lawyer.education.map((edu) => (
                        <li key={edu} className="text-gray-600">{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bar Admissions</h3>
                    <ul className="space-y-2">
                      {lawyer.admissions.map((admission) => (
                        <li key={admission} className="text-gray-600">{admission}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Awards & Recognition */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
                <ul className="space-y-2">
                  {lawyer.awards.map((award) => (
                    <li key={award} className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-yellow-500 mt-1" />
                      <span className="text-gray-600">{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      {lawyer.address}<br />
                      {lawyer.city}, {lawyer.state} {lawyer.zip}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Contact for phone number</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-2" />
                    <a href={`https://${lawyer.website}`} className="text-blue-600 hover:underline">
                      {lawyer.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Consultation Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{lawyer.consultationFee}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{lawyer.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      Languages: {lawyer.languages.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}