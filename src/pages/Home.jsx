import React from 'react';
import HeroSection from '../sections/HeroSection';
import ProyectoSection from '../sections/ProyectoSection';
import GaleriaSection from '../sections/GaleriaSection';
import EquipoSection from '../sections/EquipoSection';
import ContactoSection from '../sections/ContactoSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProyectoSection />
      <GaleriaSection />
      <EquipoSection />
      <ContactoSection />
    </main>
  );
};

export default Home;