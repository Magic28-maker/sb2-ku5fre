import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Terms of Use</h1>
          <p className="mt-2 text-gray-300">Last Updated: March 20, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing and using oregonlawyer.org ("the Website"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-6">
              Oregonlawyer.org is an online directory and information platform connecting individuals with legal professionals in Oregon. We provide listings of attorneys, legal resources, and related content. The Website is for informational purposes only and does not constitute legal advice.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. No Attorney-Client Relationship</h2>
            <p className="mb-6">
              Use of the Website does not create an attorney-client relationship. Any information submitted to attorneys through the Website does not constitute a privileged attorney-client communication. An attorney-client relationship is only formed through direct engagement with an attorney.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the Website in compliance with all applicable laws</li>
              <li>Not engage in any activity that interferes with or disrupts the Website</li>
              <li>Not attempt to gain unauthorized access to any portion of the Website</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Attorney Listings and Reviews</h2>
            <p className="mb-6">
              Attorney profiles are created and maintained by the attorneys themselves or their authorized representatives. While we strive to verify basic information, we do not guarantee the accuracy of profile content. Reviews and ratings reflect the opinions of users and should not be considered as endorsements.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-6">
              All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of oregonlawyer.org or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or exploit any content without prior written permission.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
            <p className="mb-6">
              The Website is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by law, oregonlawyer.org and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Website.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. User Content</h2>
            <p className="mb-6">
              By submitting content to the Website (including reviews, comments, and feedback), you grant oregonlawyer.org a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content for any purpose.
            </p>

            <h2 className="text-2xl font-bold mb-4">10. Privacy Policy</h2>
            <p className="mb-6">
              Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms of Use by reference.
            </p>

            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="mb-6">
              We reserve the right to terminate or suspend your access to the Website at any time, without notice, for any reason, including violation of these Terms of Use.
            </p>

            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="mb-6">
              We may modify these Terms of Use at any time. Continued use of the Website after any changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p className="mb-6">
              These Terms of Use are governed by the laws of the State of Oregon, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Oregon.
            </p>

            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="mb-6">
              For questions about these Terms of Use, please contact us at:<br />
              Email: legal@oregonlawyer.org<br />
              Address: Portland, OR 97205
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                By using oregonlawyer.org, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}