import React, { useState } from 'react';
import { useFormSubmission } from '../components/FormSubmissionHandler';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface VerificationData {
  barNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptedTerms: boolean;
}

interface ProfileData {
  firm: string;
  practiceAreas: string[];
  experience: string;
  bio: string;
  address: string;
  city: string;
  zip: string;
  website?: string;
  languages?: string[];
  education?: string[];
  certifications?: string[];
}

type Step = 'verification' | 'profile' | 'plan' | 'confirmation';

export default function LawyerSignup() {
  const { submissionState, handleSubmit } = useFormSubmission();
  const [currentStep, setCurrentStep] = useState<Step>('verification');
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');

  const [verificationData, setVerificationData] = useState<VerificationData>({
    barNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptedTerms: false
  });

  const [profileData, setProfileData] = useState<ProfileData>({
    firm: '',
    practiceAreas: [],
    experience: '',
    bio: '',
    address: '',
    city: '',
    zip: '',
    website: '',
    languages: [],
    education: [],
    certifications: []
  });

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationData.barNumber || !verificationData.firstName || 
        !verificationData.lastName || !verificationData.email || 
        !verificationData.phone || !verificationData.acceptedTerms) {
      alert('Please fill in all required fields');
      return;
    }
    const success = await handleSubmit(verificationData, 'directory');
    if (success) {
      setCurrentStep('profile');
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileData.firm || !profileData.practiceAreas.length || 
        !profileData.experience || !profileData.bio || 
        !profileData.address || !profileData.city || !profileData.zip) {
      alert('Please fill in all required fields');
      return;
    }
    const success = await handleSubmit(profileData, 'directory');
    if (success) {
      setCurrentStep('plan');
    }
  };

  const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const planData = {
      plan: selectedPlan,
      verificationData,
      profileData
    };
    const success = await handleSubmit(planData, 'directory');
    if (success) {
      setCurrentStep('confirmation');
    }
  };

  if (currentStep === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Submission Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for submitting your directory listing. Our team will review your information and contact you shortly.
            </p>
            <a href="/" className="btn-primary">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Join Our Directory</h1>
          <p className="text-gray-300">Connect with potential clients and grow your practice</p>
        </div>
      </div>

      {/* Form Steps */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 'verification' && (
            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Verify Your Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Oregon Bar Number</label>
                <input
                  type="text"
                  value={verificationData.barNumber}
                  onChange={(e) => setVerificationData({
                    ...verificationData,
                    barNumber: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={verificationData.firstName}
                    onChange={(e) => setVerificationData({
                      ...verificationData,
                      firstName: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={verificationData.lastName}
                    onChange={(e) => setVerificationData({
                      ...verificationData,
                      lastName: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={verificationData.email}
                  onChange={(e) => setVerificationData({
                    ...verificationData,
                    email: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={verificationData.phone}
                  onChange={(e) => setVerificationData({
                    ...verificationData,
                    phone: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={verificationData.acceptedTerms}
                  onChange={(e) => setVerificationData({
                    ...verificationData,
                    acceptedTerms: e.target.checked
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the terms of service and privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={submissionState.isSubmitting}
              >
                {submissionState.isSubmitting ? 'Submitting...' : 'Continue'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}

          {currentStep === 'profile' && (
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Create Your Profile</h2>
              
              {/* Profile form fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Law Firm</label>
                <input
                  type="text"
                  value={profileData.firm}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    firm: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Practice Areas</label>
                <select
                  multiple
                  value={profileData.practiceAreas}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    practiceAreas: Array.from(e.target.selectedOptions, option => option.value)
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="Family Law">Family Law</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Business Law">Business Law</option>
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Estate Planning">Estate Planning</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                <input
                  type="text"
                  value={profileData.experience}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    experience: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    bio: e.target.value
                  })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      address: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    value={profileData.city}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      city: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  value={profileData.zip}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    zip: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={submissionState.isSubmitting}
              >
                {submissionState.isSubmitting ? 'Submitting...' : 'Continue'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}

          {currentStep === 'plan' && (
            <form onSubmit={handlePlanSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Select Your Plan</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-lg border-2 cursor-pointer ${
                    selectedPlan === 'basic'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedPlan('basic')}
                >
                  <h3 className="text-xl font-semibold mb-2">Basic Listing</h3>
                  <p className="text-gray-600 mb-4">Perfect for solo practitioners</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Basic profile listing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Contact information
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Practice areas
                    </li>
                  </ul>
                  <p className="mt-4 text-2xl font-bold">Free</p>
                </div>

                <div
                  className={`p-6 rounded-lg border-2 cursor-pointer ${
                    selectedPlan === 'premium'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedPlan('premium')}
                >
                  <h3 className="text-xl font-semibold mb-2">Premium Listing</h3>
                  <p className="text-gray-600 mb-4">Enhanced visibility and features</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Featured placement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Enhanced profile
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Analytics dashboard
                    </li>
                  </ul>
                  <p className="mt-4 text-2xl font-bold">$99/month</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={submissionState.isSubmitting}
              >
                {submissionState.isSubmitting ? 'Submitting...' : 'Complete Registration'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}