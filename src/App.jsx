import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PracticesSection from './components/PracticesSection';
import IndustriesSection from './components/IndustriesSection';
import TeamSection from './components/TeamSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import ConsultationModal from './components/ConsultationModal';
import LegalPagesModal from './components/LegalPagesModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [legalModalPage, setLegalModalPage] = useState(null);

  const openConsultation = () => setConsultationOpen(true);
  const closeConsultation = () => setConsultationOpen(false);

  const openLegalPage = (pageKey) => setLegalModalPage(pageKey);
  const closeLegalPage = () => setLegalModalPage(null);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-alexandria selection:bg-gold-500 selection:text-navy-950">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openConsultation={openConsultation} 
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-12">
            <Hero 
              onExploreServices={() => setActiveTab('practices')}
              onContactTeam={() => setActiveTab('contact')}
            />

            {/* Quick Practice Showcase on Home */}
            <div className="py-8">
              <PracticesSection 
                onSelectPractice={(area) => setActiveTab('practices')}
                onRequestConsultation={() => setConsultationOpen(true)}
              />
            </div>

            {/* About Showcase */}
            <AboutSection onOpenConsultation={openConsultation} />

            {/* Team Showcase */}
            <TeamSection onRequestConsultation={() => setConsultationOpen(true)} />

            {/* Insights Showcase */}
            <InsightsSection />

            {/* Contact Form Section on Home */}
            <ContactSection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-24 pb-16">
            <AboutSection onOpenConsultation={openConsultation} />
          </div>
        )}

        {activeTab === 'practices' && (
          <div className="pt-24 pb-16">
            <PracticesSection 
              onSelectPractice={() => {}}
              onRequestConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {activeTab === 'industries' && (
          <div className="pt-24 pb-16">
            <IndustriesSection onRequestConsultation={() => setConsultationOpen(true)} />
          </div>
        )}

        {activeTab === 'team' && (
          <div className="pt-24 pb-16">
            <TeamSection onRequestConsultation={() => setConsultationOpen(true)} />
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="pt-24 pb-16">
            <InsightsSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 pb-16">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        openLegalPage={openLegalPage}
        openConsultation={openConsultation}
      />

      {/* Floating Action / Consultation Request Modal */}
      <ConsultationModal 
        isOpen={consultationOpen} 
        onClose={closeConsultation} 
      />

      {/* Regulatory Legal Documents Modal */}
      <LegalPagesModal 
        activePage={legalModalPage} 
        onClose={closeLegalPage} 
      />

    </div>
  );
}
