'use client';

import PhilosophyHero from './PhilosophyHero';
import PhilosophyCore from './PhilosophyCore';
import PhilosophyJourney from './PhilosophyJourney';
import PhilosophyValues from './PhilosophyValues';
import PhilosophyCraftsmanship from './PhilosophyCraftsmanship';
import PhilosophyLegacy from './PhilosophyLegacy';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PhilosophyHero />
      <PhilosophyCore />
      <PhilosophyJourney />
      <PhilosophyValues />
      <PhilosophyCraftsmanship />
      <PhilosophyLegacy />
      <Footer />
    </div>
  );
}