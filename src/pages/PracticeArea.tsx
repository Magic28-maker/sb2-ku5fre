import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Scale, Heart, Gavel, FileText, DollarSign } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

export default function PracticeArea() {
  const { id } = useParams();
  const area = practiceAreas.find(a => a.id === id);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Practice Area Not Found</h2>
          <p className="text-gray-600">The requested practice area does not exist.</p>
        </div>
      </div>
    );
  }

  // Family Law specific content
  const familyLawContent = id === 'family-law' ? {
    overview: `Family law matters are deeply personal and emotionally challenging. Our directory connects you with experienced Oregon family law attorneys who can guide you through complex legal processes while protecting your rights and interests. Whether you're dealing with divorce, child custody, adoption, or other family-related legal matters, find the right legal representation for your specific needs.`,
    commonIssues: [
      {
        title: 'Divorce & Separation',
        description: 'Legal dissolution of marriage, including asset division, spousal support, and settlement negotiations.',
        icon: Scale
      },
      {
        title: 'Child Custody & Support',
        description: 'Establishing parenting time, legal custody arrangements, and child support calculations.',
        icon: Heart
      },
      {
        title: 'Adoption & Guardianship',
        description: 'Legal processes for adopting children or establishing legal guardianship.',
        icon: Users
      },
      {
        title: 'Domestic Violence',
        description: 'Protective orders, restraining orders, and legal protection for domestic violence victims.',
        icon: Gavel
      },
      {
        title: 'Prenuptial Agreements',
        description: 'Creating legally binding agreements before marriage to protect assets and define financial responsibilities.',
        icon: FileText
      },
      {
        title: 'Mediation Services',
        description: 'Alternative dispute resolution for family matters outside of court.',
        icon: DollarSign
      }
    ],
    whyLawyer: [
      'Protection of legal rights and interests',
      'Expert navigation of complex family law procedures',
      'Objective professional guidance during emotional situations',
      'Experience with Oregon family courts and local laws',
      'Skilled negotiation in settlements and agreements',
      'Access to professional resources and expert witnesses'
    ],
    faq: [
      {
        question: 'How long does a divorce typically take in Oregon?',
        answer: 'In Oregon, there is a mandatory 90-day waiting period after serving divorce papers. Uncontested divorces might be completed within 3-4 months, while contested divorces can take 6-12 months or longer.'
      },
      {
        question: 'How is child custody determined in Oregon?',
        answer: 'Oregon courts determine custody based on the best interests of the child, considering factors such as the emotional ties between the child and family members, attitude of the parents, and the child\'s adjustment to home, school, and community.'
      },
      {
        question: 'What is the difference between legal and physical custody?',
        answer: 'Legal custody refers to decision-making authority about the child\'s education, healthcare, and welfare. Physical custody determines where the child primarily lives and the parenting time schedule.'
      },
      {
        question: 'Do I need a lawyer for an uncontested divorce?',
        answer: 'While not required, having a lawyer review your agreement is recommended to ensure your rights are protected and all necessary legal requirements are met, even in uncontested divorces.'
      }
    ]
  } : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{area.name} Attorneys in Oregon</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {familyLawContent?.overview || area.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      {familyLawContent && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Common Legal Issues */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Common Family Law Issues</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyLawContent.commonIssues.map((issue) => (
                  <div key={issue.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <issue.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                    <p className="text-gray-600">{issue.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Hire Section */}
            <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8">Why Hire a Family Law Attorney?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {familyLawContent.whyLawyer.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {familyLawContent.faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Find a Family Law Attorney Today</h2>
              <p className="text-xl mb-6">Connect with experienced family law attorneys in Oregon</p>
              <Link
                to="/search?practice=Family%20Law"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Search Family Law Attorneys
              </Link>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}