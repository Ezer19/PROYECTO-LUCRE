import React from 'react';
import Card from '../ui/Card';

const Equipo = () => {
  const teamMembers = [
    {
      name: "Jesús Aaron Condo Morales",
      role: "Coordinador de Proyecto",
      bio: "Ingeniero eléctrico con especialización en energías renovables. Coordina las instalaciones y el mantenimiento de los sistemas solares."
    },
    {
      name: "Ezer Benito Zuniga Chura",
      role: "Especialista en Energía",
      bio: "Experto en sistemas fotovoltaicos. Diseña las soluciones energéticas adaptadas a cada comunidad."
    },
    {
      name: "Edgardo Rodrigo Carrillo Alarcon",
      role: "Ingeniero Ambiental",
      bio: "Encargado de evaluar el impacto ambiental de nuestros proyectos y promover prácticas sostenibles."
    },
    {
      name: "Flor Paloma Valderrama Quispe",
      role: "Relaciones Comunitarias",
      bio: "Facilita la comunicación con las comunidades y organiza talleres de capacitación."
    },
    {
      name: "Maria Elena Condori Huaman",
      role: "Desarrollo Sostenible",
      bio: "Desarrolla proyectos complementarios que generen oportunidades económicas para las comunidades."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nuestro Equipo</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce al equipo de profesionales comprometidos con el desarrollo sostenible de las comunidades andinas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-white font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-accent">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-700 flex-grow">{member.bio}</p>
              <div className="mt-4 flex space-x-2">
                <button className="text-primary hover:text-primary-dark transition-colors">LinkedIn</button>
                <button className="text-primary hover:text-primary-dark transition-colors">Email</button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Nuestra Metodología</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white border-2 border-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-accent">Diagnóstico</h3>
              <p className="text-gray-700">Evaluamos las necesidades energéticas y sociales de cada comunidad.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white border-2 border-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-accent">Diseño</h3>
              <p className="text-gray-700">Creamos soluciones personalizadas adaptadas al contexto local.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white border-2 border-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-accent">Implementación</h3>
              <p className="text-gray-700">Instalamos los sistemas con participación activa de la comunidad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipo;