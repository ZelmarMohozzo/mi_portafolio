import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Lock, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-6">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">Cybersecurity Specialist & Web Developer</span>
                  <Lock className="w-4 h-4 text-blue-400" />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="block">¡Hola, soy</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zelmar Mohozzo!
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                🛡️ Cybersecurity Specialist con +6 años de experiencia<br/>
                🎨 Web Developer (Frontend + Backend)<br/>
                📊 Project Manager | 🐧 Linux Expert | 💣 Pentester
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center">
                  <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">6+</div>
                  <div className="text-sm text-gray-400">Años Experiencia</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">Code Society</div>
                  <div className="text-sm text-gray-400">Formador & Tester</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contact"
                  className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200 transform hover:scale-105"
                >
                  Contactar
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/ZelmarMohozzo"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://linkedin.com/in/zelmar-mohozzo"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:zelmar.mohozzo@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                  <img
                    src="https://zelmarmohozzo.netlify.app/"
                    alt="Zelmar Mohozzo"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;