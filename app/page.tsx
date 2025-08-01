'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import CollectionSection from '../components/CollectionSection';
import AtelierSection from '../components/AtelierSection';
import GallerySection from '../components/GallerySection';
import EditorialSection from '../components/EditorialSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CraftsmanshipSection from '../components/CraftsmanshipSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <CollectionSection />
      <AtelierSection />
      <GallerySection />
      <EditorialSection />
      <TestimonialsSection />
      <CraftsmanshipSection />
      <ExperienceSection />
      <Footer />
      <Analytics/>
    </div>
  );
}