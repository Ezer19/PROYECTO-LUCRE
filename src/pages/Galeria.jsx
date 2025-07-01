import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Galeria = () => {
  const galleryItems = Array(12).fill().map((_, i) => ({
    id: i + 1,
    title: `Imagen ${i + 1}`,
    description: "Descripción de la imagen"
  }));

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Galería de Imágenes</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explora nuestro trabajo a través de fotografías que capturan momentos significativos de nuestro proyecto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              image={true}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="px-8">Cargar más</Button>
        </div>
      </div>
    </div>
  );
};

export default Galeria;