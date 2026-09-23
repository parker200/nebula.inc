import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Protocol from './components/Protocol';
import PricingPlans from './components/PricingPlans';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive Intrusion Simulator */}
        <Hero />

        {/* Traditional vs Nébula Comparison */}
        <Comparison />

        {/* 6-Phase Tactical Intervention Protocol */}
        <Protocol />

        {/* Transparent Pricing Plans (Vista & Total) */}
        <PricingPlans />

        {/* Interactive m³ Calculator & WhatsApp Formatter */}
        <Calculator />

        {/* Technical FAQ Accordion */}
        <FAQ />
      </main>

      {/* Localized Footer */}
      <Footer />
    </div>
  );
}
