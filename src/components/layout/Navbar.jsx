import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isMobile = false, onClose }) => {
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/proyecto", label: "Proyecto" },
    { path: "/galeria", label: "Galería" },
    { path: "/experiencia", label: "Experiencia" },
    { path: "/equipo", label: "Equipo" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav>
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-6'}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-accent ${
                  isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-inherit'
                } ${isMobile ? 'block py-2' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;