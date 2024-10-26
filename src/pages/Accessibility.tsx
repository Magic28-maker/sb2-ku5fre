import React from 'react';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Accessibility Statement</h1>
          <p className="mt-2 text-gray-300">Last Updated: March 20, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
            <p className="mb-6">
              Oregonlawyer.org is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve this.
            </p>

            <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
            <p className="mb-6">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
            </p>

            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <p className="mb-4">Our website includes the following accessibility features:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Semantic HTML markup for better screen reader compatibility</li>
              <li>ARIA landmarks and labels where appropriate</li>
              <li>Sufficient color contrast ratios</li>
              <li>Clear heading hierarchy</li>
              <li>Alt text for images</li>
              <li>Keyboard navigation support</li>
              <li>Resizable text without loss of functionality</li>
              <li>Focus indicators for keyboard navigation</li>
              <li>Skip navigation links</li>
              <li>Consistent navigation structure</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Supported Assistive Technologies</h2>
            <p className="mb-4">Our website is designed to be compatible with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
              <li>Voice recognition software</li>
              <li>Screen magnification software</li>
              <li>Alternative keyboard devices</li>
              <li>Alternative pointing devices</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
            <p className="mb-6">
              While we strive for comprehensive accessibility, some content or features may not be fully accessible. We are actively working to identify and resolve any accessibility issues. If you encounter any accessibility barriers, please let us know.
            </p>

            <h2 className="text-2xl font-bold mb-4">Browser and Assistive Technology Compatibility</h2>
            <p className="mb-6">
              We aim to support the widest array of browsers and assistive technologies as possible. The website should work with current versions of:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Chrome and Chrome for Android</li>
              <li>Firefox</li>
              <li>Safari and iOS Safari</li>
              <li>Microsoft Edge</li>
              <li>Opera</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Feedback and Contact Information</h2>
            <p className="mb-6">
              We welcome your feedback on the accessibility of oregonlawyer.org. If you experience any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="list-none pl-6 mb-6">
              <li>Email: accessibility@oregonlawyer.org</li>
              <li>Phone: (503) 555-0123</li>
              <li>Address: Portland, OR 97205</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <p className="mb-4">For more information about web accessibility, please visit:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <a 
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Content Accessibility Guidelines (WCAG)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ada.gov/" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Americans with Disabilities Act (ADA)
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
            <p className="mb-6">
              We are committed to maintaining an accessible website and regularly review our site for accessibility issues. We also provide accessibility training to our staff and include accessibility as part of our development process.
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                This accessibility statement was last updated on March 20, 2024. We will regularly review and update this statement as our website and accessibility standards evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}