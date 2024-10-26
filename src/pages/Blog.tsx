import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Oregon's No-Fault Divorce Laws",
    excerpt: "A comprehensive guide to navigating divorce proceedings in Oregon, including recent legal updates and what to expect during the process.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Family Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    slug: "understanding-oregon-no-fault-divorce-laws"
  },
  {
    id: 2,
    title: "Business Formation Guide: Choosing the Right Structure",
    excerpt: "Learn about different business structures in Oregon and how to choose the best option for your new venture.",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Business Law",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    slug: "business-formation-guide"
  },
  {
    id: 3,
    title: "Personal Injury Claims: What You Need to Know",
    excerpt: "Essential information about filing personal injury claims in Oregon, including deadlines, procedures, and recent case examples.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    category: "Personal Injury",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    slug: "personal-injury-claims-guide"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Legal Insights & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay informed with the latest legal news, insights, and practical guides from Oregon's top legal professionals.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600 transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}