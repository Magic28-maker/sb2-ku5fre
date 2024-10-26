import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import LawyerSignup from './pages/LawyerSignup';
import LawyerProfile from './pages/LawyerProfile';
import PracticeArea from './pages/PracticeArea';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import LegalDisclaimer from './pages/LegalDisclaimer';
import Accessibility from './pages/Accessibility';
import AdminImport from './pages/AdminImport';
import AdminLogin from './pages/AdminLogin';
import AdminRoute from './components/AdminRoute';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-legal-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-oregon-lawyer" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lawyer-signup" element={<LawyerSignup />} />
            <Route path="/lawyer/:id" element={<LawyerProfile />} />
            <Route path="/practice-areas/:id" element={<PracticeArea />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/disclaimer" element={<LegalDisclaimer />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/import" 
              element={
                <AdminRoute>
                  <AdminImport />
                </AdminRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;</content>