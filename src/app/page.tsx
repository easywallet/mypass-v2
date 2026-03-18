import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Certifications } from '@/components/Certifications';
import { BentoGrid } from '@/components/BentoGrid';
import { DevPortal } from '@/components/DevPortal';
import { ContactForm } from '@/components/ContactForm';
import { UnifiedJourneySection } from '@/components/UnifiedJourneySection';
import { B2CSection } from '@/components/B2CSection';
import { CertificationBadge } from '@/components/CertificationBadge';
import { FooterCertLink } from '@/components/FooterCertLink';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Local Navbar and Footer have been moved to src/components/Navbar.tsx and src/components/Footer.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-emerald-400/30">
      <div className="fixed inset-0 bg-radial-gradient opacity-50 pointer-events-none" />
      <Navbar />
      <Hero />
      <UnifiedJourneySection />
      <B2CSection />
      <Certifications />
      <BentoGrid />
      <DevPortal />
      <ContactForm />
      <Footer />
    </main>
  );
}
