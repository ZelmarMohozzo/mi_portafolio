import React from 'react';
import { Code2, Shield, Database, Users, Award, Target, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, label: 'Años en Cyberseguridad', value: '6+' },
    { icon: Code2, label: 'Proyectos Completados', value: '50+' },
    { icon: Users, label: 'Estudiantes Formados', value: '100+' },
    { icon: Award, label: 'Certificaciones', value: '10+' },
  ];

  const experience = [
    {
      icon: GraduationCap,
      title: 'Code Society',
      role: 'Formador & Security Tester',
      description: 'Formación de talentos en ciberseguridad y testing de seguridad en proyectos internos.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Security Auditor',
      role: 'Pentester & Vulnerability Assessor',
      description: 'Participación en auditorías, pruebas de penetración y desarrollo de estrategias de mitigación de riesgos.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Solution Maker',
      role: 'Project Realizer',
      description: 'Acompañamiento y desarrollo de ideas ajenas, transformando conceptos en productos funcionales.',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="text-emerald-400">Mí</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Apasionado de la tecnología con más de 6 años de experiencia en Ciberseguridad, 
              Desarrollo Web y Gestión de Proyectos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Soy un apasionado de la tecnología con más de 6 años de experiencia en 
                  Ciberseguridad, Desarrollo Web y Gestión de Proyectos. Me encanta trabajar 
                  en ambientes colaborativos y enfocados en la mejora constante.
                </p>
                <p>
                  He formado parte de <strong className="text-emerald-400">Code Society</strong>, 
                  donde brindé talleres de formación en seguridad informática y participé como 
                  tester de seguridad en múltiples proyectos.
                </p>
                <p>
                  Actualmente estoy explorando nuevas tecnologías, colaborando en proyectos que 
                  combinan desarrollo + seguridad, y formando nuevas generaciones en el mundo tech.
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mt-6">
                  <h4 className="text-emerald-400 font-semibold mb-2">🌱 Actualmente trabajando en:</h4>
                  <ul className="text-sm space-y-1">
                    <li>📊 Proyecto LATAM DATA HUB - Análisis de Datos</li>
                    <li>🖋️ Plataforma para Academia de Tatuajes</li>
                    <li>🔍 Nuevos desafíos y proyectos innovadores</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-emerald-400/50 transition-all duration-200"
                >
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Experiencia Profesional</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${exp.color} mb-4`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                  <h5 className="text-emerald-400 font-medium mb-3">{exp.role}</h5>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;