import React from 'react';

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Legal Disclaimer</h1>
          <p className="mt-2 text-gray-300">Last Updated: March 20, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">General Disclaimer</h2>
            <p className="mb-6">
              The information provided on oregonlawyer.org is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
            </p>

            <h2 className="text-2xl font-bold mb-4">Not Legal Advice</h2>
            <p className="mb-6">
              The content on oregonlawyer.org does not constitute legal advice and should not be construed as such. The law can be complex and highly fact-specific. Any reliance you place on information from this website is strictly at your own risk. We strongly recommend seeking professional legal counsel for your specific circumstances.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
            <p className="mb-6">
              Use of oregonlawyer.org or communication through the website does not create an attorney-client relationship. The attorney-client relationship can only be established through direct engagement with an attorney and the signing of a formal agreement.
            </p>

            <h2 className="text-2xl font-bold mb-4">Attorney Listings</h2>
            <p className="mb-6">
              The attorney listings on oregonlawyer.org are provided as a service to the public. While we verify basic licensing information, we do not make any judgments about or endorse the qualifications, expertise, or credentials of any listed attorney. Past results do not guarantee similar outcomes in future cases.
            </p>

            <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
            <p className="mb-6">
              Our website may contain links to third-party websites or content provided by third parties. We have no control over the nature, content, and availability of those sites. The inclusion of any links or content does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>

            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by applicable law, oregonlawyer.org and its operators shall not be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The use or inability to use the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Statements or conduct of any third party on the website</li>
              <li>Any other matter relating to the website</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
            <p className="mb-6">
              While we make every effort to ensure that the information on oregonlawyer.org is accurate and up-to-date, laws and regulations change frequently. Information that was accurate when posted may become outdated. Users should verify any information before relying on it.
            </p>

            <h2 className="text-2xl font-bold mb-4">Jurisdictional Issues</h2>
            <p className="mb-6">
              The information on oregonlawyer.org is intended for use by residents of Oregon. Laws vary by jurisdiction, and the information provided may not be applicable in your location. Users from other jurisdictions access this website at their own risk.
            </p>

            <h2 className="text-2xl font-bold mb-4">Professional Licensing</h2>
            <p className="mb-6">
              While we verify that listed attorneys are licensed with the Oregon State Bar at the time of their listing, we cannot guarantee continuous monitoring of their license status. Users should verify current licensing status with the Oregon State Bar.
            </p>

            <h2 className="text-2xl font-bold mb-4">Changes to Disclaimer</h2>
            <p className="mb-6">
              We reserve the right to modify this disclaimer at any time without notice. Your continued use of oregonlawyer.org following any changes indicates your acceptance of such changes.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">
              If you have any questions about this Legal Disclaimer, please contact us at:<br />
              Email: legal@oregonlawyer.org<br />
              Address: Portland, OR 97205
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                By using oregonlawyer.org, you acknowledge that you have read, understood, and agree to this Legal Disclaimer. If you do not agree with any part of this disclaimer, please do not use the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}