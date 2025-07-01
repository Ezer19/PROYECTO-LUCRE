import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Proyecto = () => {
  const indicators = [
    "Reducción de residuos en la laguna",
    "Incremento en campañas y talleres realizados",
    "Cantidad de plantas nativas sembradas (totora, qantu, mutuy)",
    "Participación comunitaria en actividades de limpieza",
    "Aumento del turismo ecológico",
    "Percepción positiva de los pobladores sobre la mejora"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Detalles del Proyecto</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce en profundidad nuestro enfoque, metodología y resultados en las comunidades andinas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-primary">Indicadores de Medición</h2>
            
            <ul className="space-y-4">
              {indicators.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-primary">Materiales Utilizados</h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Botellas y tapas de plástico recicladas</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Latas reutilizadas</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Cartón reciclado</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Piezas electrónicas viejas</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Madera reutilizada</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Luces LED de bajo consumo</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>Paneles solares reciclados</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="bg-light rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Problemática Social</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Problemática</th>
                  <th className="py-3 px-4 text-left">Datos Estadísticos</th>
                  <th className="py-3 px-4 text-left">Causas</th>
                  <th className="py-3 px-4 text-left">Consecuencias</th>
                  <th className="py-3 px-4 text-left">Soluciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4">Falta de embellecimiento</td>
                  <td className="py-4 px-4">
                    90% de la población está de acuerdo en embellecer la laguna de Lucre y generar turismo
                  </td>
                  <td className="py-4 px-4">
                    Falta de intervención y apoyo por parte de las autoridades locales
                  </td>
                  <td className="py-4 px-4">
                    Disminución del turismo local e internacional
                  </td>
                  <td className="py-4 px-4">
                    Uso de plantas nativas (totora, qantu, mutuy), integración de reciclaje
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <Button to="/contacto" variant="primary" className="px-8">Contactar al equipo</Button>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;