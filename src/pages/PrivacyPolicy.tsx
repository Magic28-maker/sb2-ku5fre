import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-gray-300">Last Updated: March 20, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-6">
              At oregonlawyer.org ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Professional credentials and bar numbers (for attorneys)</li>
              <li>Location information</li>
              <li>Communication preferences</li>
              <li>Information provided in contact forms or during registration</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Operating system</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Providing and maintaining our services</li>
              <li>Improving user experience</li>
              <li>Communicating with you about our services</li>
              <li>Processing transactions</li>
              <li>Analyzing usage patterns</li>
              <li>Preventing fraud and enhancing security</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisers and insurers</li>
              <li>Successor entities in case of a merger or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="mb-6">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@oregonlawyer.org<br />
              Address: Portland, OR 97205
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                By using oregonlawyer.org, you acknowledge that you have read and understand this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}