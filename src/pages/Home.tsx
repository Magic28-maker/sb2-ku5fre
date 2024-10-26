import React, { useState } from 'react';
import { Search, Shield, Award, Users, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';
import PracticeAreaCard from '../components/PracticeAreaCard';
import SearchFilters from '../components/SearchFilters';

export default function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const featuredAreas = practiceAreas.slice(0, 4);
  const otherAreas = practiceAreas.slice(4);

  const [searchParams, setSearchParams] = useState({
    location: '',
    radius: '10',
    practiceArea: '',
    keyword: '',
    experience: '',
    rating: '',
    language: ''
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchParams(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    navigate(`/find-oregon-lawyer?${params.toString()}`);
  };

  const faqs = [
    {
      question: "How do I find the right lawyer for my case?",
      answer: "Start by searching our directory based on your location and legal need. Review attorney profiles, experience, and client reviews. Many lawyers offer free consultations where you can discuss your case and determine if they're a good fit."
    },
    {
      question: "What should I expect during an initial consultation?",
      answer: "During an initial consultation, the attorney will discuss your legal issue, potential solutions, and their experience with similar cases. They should also explain their fee structure and timeline expectations. Come prepared with relevant documents and questions."
    },
    {
      question: "How much do legal services typically cost?",
      answer: "Legal fees vary widely depending on the type of case, complexity, and attorney experience. Some lawyers charge hourly rates, while others work on contingency fees. Many offer free initial consultations. Always discuss fees upfront and get fee agreements in writing."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Find Trusted Oregon Attorneys Near You
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with qualified lawyers across Oregon. Free directory search by practice area and location.
            </p>
          </div>

          {/* Search Form */}
          <div className="mt-8 max-w-4xl mx-auto">
            <SearchFilters
              searchParams={searchParams}
              showFilters={showFilters}
              onSearchChange={handleSearchChange}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center"
              >
                Search Lawyers
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Practice Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAreas.map((area) => (
              <PracticeAreaCard key={area.id} area={area} featured />
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherAreas.map((area) => (
              <PracticeAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </div>

      {/* Join Directory Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Are You an Oregon Attorney?</h2>
              <p className="text-xl mb-8">
                Join our directory to connect with potential clients and grow your practice.
              </p>
              <Link
                to="/lawyer-signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center"
              >
                Join Our Directory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
                <p className="text-blue-100">
                  All listings are verified with the Oregon State Bar
                </p>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg">
                <Users className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">Client Connections</h3>
                <p className="text-blue-100">
                  Connect with clients seeking your expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}