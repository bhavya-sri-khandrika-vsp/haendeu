'use client';

import Navbar from '../../components/Navbar';
import AtelierHero from './AtelierHero';
import WorkshopSpaces from './WorkshopSpaces';
import CraftingProcess from './CraftingProcess';
import MasterArtisans from './MasterArtisans';
import MaterialsJourney from './MaterialsJourney';
import InnovationLab from './InnovationLab';
import AtelierExperience from './AtelierExperience';
import Footer from '../../components/Footer';

export default function AtelierPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AtelierHero />
      <WorkshopSpaces />
      <CraftingProcess />
      <MasterArtisans />
      <MaterialsJourney />
      <InnovationLab />
      <AtelierExperience />
      <Footer />
    </div>
  );
}