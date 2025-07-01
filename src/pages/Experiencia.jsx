import React from 'react';
import Card from '../ui/Card';
import { FiUser, FiCalendar } from 'react-icons/fi';

const Experiencia = () => {
  const testimonials = [
    {
      name: "María López",
      role: "Comunidad de Lucre",
      date: "15 de Octubre, 2023",
      content: "Gracias a Luces del Ande, nuestra comunidad ahora tiene acceso a energía limpia. Los paneles solares han cambiado nuestras vidas, especialmente para los niños que ahora pueden estudiar por las noches."
    },
    {
      name: "Juan Pérez",
      role: "Líder comunitario",
      date: "2 de Noviembre, 2023",
      content: "El proyecto no solo nos trajo energía, sino también oportunidades económicas. Ahora podemos refrigerar nuestros productos agrícolas y venderlos a mejores precios."
    },
    {
      name: "Rosa Quispe",
      role: "Maestra local",
      date: "20 de Diciembre, 2023",
      content: "Como maestra, he visto cómo la energía eléctrica ha mejorado la educación en nuestra comunidad. Los niños están más motivados y tenemos acceso a recursos educativos digitales."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experiencias</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Historias reales de cómo nuestro proyecto ha impactado positivamente en las comunidades andinas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FiCalendar className="mr-2" />
                <span>{testimonial.date}</span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Impacto del Proyecto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Logros:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">✓</div>
                  <span>15 comunidades beneficiadas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">✓</div>
                  <span>500+ paneles solares instalados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">✓</div>
                  <span>2000+ personas con acceso a energía limpia</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">✓</div>
                  <span>25 talleres de capacitación realizados</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Próximos objetivos:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">→</div>
                  <span>Expandir el proyecto a 10 comunidades más</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">→</div>
                  <span>Implementar sistemas de riego solar</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">→</div>
                  <span>Crear un centro de capacitación técnica</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">→</div>
                  <span>Desarrollar proyectos de turismo sostenible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;