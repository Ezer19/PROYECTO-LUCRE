import React from 'react';
import Card from '../ui/Card';

const EquipoSection = () => {
  const teamMembers = [
    {
      name: "Jesús Aaron Condo Morales",
      role: "Coordinador de Proyecto"
    },
    {
      name: "Ezer Benito Zuniga Chura",
      role: "Especialista en Energía"
    },
    {
      name: "Edgardo Rodrigo Carrillo Alarcon",
      role: "Ingeniero Ambiental"
    },
    {
      name: "Flor Paloma Valderrama Quispe",
      role: "Relaciones Comunitarias"
    },
    {
      name: "Maria Elena Condori Huaman",
      role: "Desarrollo Sostenible"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nuestro Equipo</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Profesionales comprometidos con el desarrollo sostenible de las comunidades andinas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-accent">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;