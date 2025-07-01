import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home';
import Proyecto from '../pages/Proyecto';
import Galeria from '../pages/Galeria';
import Experiencia from '../pages/Experiencia';
import Equipo from '../pages/Equipo';
import Contacto from '../pages/Contacto';

export default function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-light">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}