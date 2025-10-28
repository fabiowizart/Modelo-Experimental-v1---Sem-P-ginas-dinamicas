import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import FAQ from './components/FAQ';
import AdminDashboard from './components/AdminDashboard';
import { initialData } from './data';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  // In a real app, you might sync this with localStorage or a backend
  const [siteData, setSiteData] = useState(initialData);

  useEffect(() => {
    const onLocationChange = () => {
      setPathname(window.location.pathname);
    };
    
    // Listen for browser navigation events
    window.addEventListener('popstate', onLocationChange);

    // Also handle clicks on links that change the path
    const originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(this, arguments as any);
      onLocationChange();
    };
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      history.pushState = originalPushState;
    };
  }, []);

  if (pathname === '/admin') {
    return <AdminDashboard data={siteData} setData={setSiteData} />;
  }

  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        {/* AIDA Stage 1: Attention */}
        <Hero content={siteData.hero} />
        
        {/* AIDA Stage 2: Interest */}
        <Features features={siteData.features} />
        <Solutions solutions={siteData.solutions} />
        
        {/* AIDA Stage 3: Desire */}
        <Testimonials testimonials={siteData.testimonials} />
        <FAQ faqData={siteData.faq} />
        
        {/* AIDA Stage 4: Action */}
        <CTA content={siteData.cta} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
