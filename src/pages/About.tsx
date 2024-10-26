import React from 'react';
import { Shield, Users, Scale } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Oregon Legal Directory</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting Oregonians with trusted legal professionals through a comprehensive and verified directory service.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Oregon Legal Directory was founded with a clear mission: to make legal representation accessible to all Oregonians. We believe that finding the right attorney shouldn't be a complicated process.
              </p>
              <p className="text-gray-600">
                Our platform connects individuals and businesses with qualified legal professionals across the state, ensuring transparent, reliable, and efficient legal services for all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Verified Attorneys</h3>
                <p className="text-sm text-gray-600">All listed attorneys are verified members of the Oregon State Bar</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Client Focus</h3>
                <p className="text-sm text-gray-600">Dedicated to helping clients find their ideal legal representation</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Scale className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Fair Access</h3>
                <p className="text-sm text-gray-600">Promoting equal access to legal services across Oregon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}