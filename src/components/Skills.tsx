import React from 'react';
import { Code, Shield, Database, Cloud, Terminal, Lock, Zap, Globe, Users, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Seguridad Informática',
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Pentesting (Web & Apps)', level: 95 },
        { name: 'Ethical Hacking', level: 90 },
        { name: 'Linux Server Security', level: 88 },
        { name: 'Gestión de Vulnerabilidades', level: 85 },
      ]
    },
    {
      icon: Code,
      title: 'Desarrollo Web',
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'React & JavaScript', level: 92 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Node.js & Express', level: 80 },
        { name: 'UI/UX Design', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Database Security', level: 90 },
      ]
    },
    {
      icon: Terminal,
      title: 'Otras Habilidades',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Linux Administration', level: 92 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Scrum & Kanban', level: 85 },
        { name: 'Project Management', level: 88 },
      ]
    },
  ];

  const tools = [
    { name: 'Burp Suite', icon: Shield },
    { name: 'Metasploit', icon: Lock },
    { name: 'Wireshark', icon: Globe },
    { name: 'NMAP', icon: Terminal },
    { name: 'Kali Linux', icon: Terminal },
    { name: 'VS Code', icon: Code },
    { name: 'Git', icon: Zap },
    { name: 'Docker', icon: Database },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mis <span className="text-emerald-400">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una combinación única de desarrollo de software y expertise en cyberseguridad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-emerald-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Herramientas & Tecnologías</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 hover:scale-105"
                >
                  <tool.icon className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-gray-300 text-sm font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;