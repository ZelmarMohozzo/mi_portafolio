import React, { useState } from 'react';
import { ExternalLink, Github, Shield, Code, Database, Globe, Lock, Zap, Eye, Users, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'LATAM DATA HUB',
      description: 'Proyecto de análisis de datos para América Latina. Plataforma integral para procesamiento y visualización de grandes volúmenes de datos con enfoque en seguridad y escalabilidad.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Python', 'D3.js'],
      features: ['Data Analytics', 'Real-time Processing', 'Security Compliance', 'Scalable Architecture'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'En desarrollo'
    },
    {
      id: 2,
      title: 'Academia de Tatuajes Platform',
      description: 'Plataforma web completa para una academia de tatuajes, incluyendo gestión de cursos, estudiantes, portafolio de trabajos y sistema de reservas online.',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe API', 'Socket.io'],
      features: ['Course Management', 'Booking System', 'Portfolio Gallery', 'Payment Integration'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'En desarrollo'
    },
    {
      id: 3,
      title: 'Security Audit Framework',
      description: 'Framework personalizado para auditorías de seguridad automatizadas, desarrollado durante mi tiempo en Code Society para testing de proyectos internos.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      technologies: ['Python', 'Bash', 'OWASP ZAP', 'Nmap', 'Custom Scripts'],
      features: ['Automated Scanning', 'OWASP Compliance', 'Custom Reports', 'Integration Ready'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 4,
      title: 'Penetration Testing Suite',
      description: 'Suite de herramientas personalizadas para pentesting web y aplicaciones móviles. Incluye scripts automatizados y metodologías propias desarrolladas.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      technologies: ['Python', 'Metasploit', 'Burp Suite', 'Kali Linux', 'Custom Tools'],
      features: ['Web App Testing', 'Mobile Security', 'Network Analysis', 'Vulnerability Assessment'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 5,
      title: 'Linux Server Hardening Scripts',
      description: 'Colección de scripts para hardening automático de servidores Linux, implementando mejores prácticas de seguridad y configuraciones optimizadas.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      technologies: ['Bash', 'Python', 'Linux', 'iptables', 'fail2ban'],
      features: ['Auto Hardening', 'Security Monitoring', 'Log Analysis', 'Compliance Checks'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 6,
      title: 'Code Society Training Platform',
      description: 'Plataforma educativa desarrollada para Code Society, enfocada en la formación de nuevos talentos en ciberseguridad con laboratorios prácticos.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'MySQL'],
      features: ['Interactive Labs', 'Progress Tracking', 'Virtual Environments', 'Certification System'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: Globe },
    { id: 'development', label: 'Desarrollo', icon: Code },
    { id: 'security', label: 'Seguridad', icon: Shield },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mis <span className="text-emerald-400">Proyectos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Una selección de proyectos que combinan desarrollo de software con mejores prácticas de cyberseguridad
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    filter === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completado' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    {project.category === 'security' ? (
                      <Shield className="w-6 h-6 text-red-400" />
                    ) : (
                      <Code className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-emerald-400 text-sm font-semibold mb-2">Características Clave:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">
                          +{project.features.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-blue-400 text-sm font-semibold mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Código</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;