import React from 'react';
import { Shield, Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Shield className="w-8 h-8 text-emerald-400" />
                  <Code className="w-4 h-4 text-blue-400 absolute -bottom-1 -right-1" />
                </div>
                <span className="text-xl font-bold text-white">Zelmar Mohozzo</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Cybersecurity Specialist & Web Developer con +6 años de experiencia. 
                Construyendo el futuro digital con código limpio y seguridad robusta.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pentesting & Ethical Hacking</li>
                <li>Desarrollo Web Frontend</li>
                <li>Auditorías de Seguridad</li>
                <li>Consultoría en Cyberseguridad</li>
                <li>Gestión de Proyectos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>por Zelmar Mohozzo</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © 2024 Zelmar Mohozzo. Todos los derechos reservados.
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800 hover:bg-emerald-500 text-gray-400 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;