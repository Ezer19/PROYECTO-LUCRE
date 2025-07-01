import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const GaleriaSection = () => {
  const galleryItems = [
    { id: 1, title: "Instalación de paneles solares", description: "Comunidad de Lucre, Cusco" },
    { id: 2, title: "Talleres comunitarios", description: "Capacitación en energía solar" },
    { id: 3, title: "Paisajes andinos", description: "Vistas de la laguna de Lucre" },
    { id: 4, title: "Plantas nativas", description: "Tocoro, qantu y mutay" },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Galería</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce nuestro trabajo a través de imágenes que capturan la esencia de nuestras comunidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              image={true}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button to="/galeria" variant="outline" className="px-8">Ver más fotos</Button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;