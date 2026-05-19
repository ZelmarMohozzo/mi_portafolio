import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zelmar.mohozzo@gmail.com',
      href: 'mailto:zelmar.mohozzo@gmail.com'
    },
    {
      icon: Phone,
      label: 'Disponibilidad',
      value: 'Freelance & Colaboraciones',
      href: '#'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'América Latina',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ZelmarMohozzo',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/zelmar-mohozzo',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      href: '#',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trabajemos <span className="text-emerald-400">Juntos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me especializo en crear soluciones seguras y escalables. 
              Siempre en busca de nuevos desafíos y proyectos para sumar a mi lista.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors duration-200 group"
                    >
                      <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-200">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Sígueme en:</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-slate-700 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <h4 className="text-emerald-400 font-semibold mb-2">Disponibilidad</h4>
                  <p className="text-gray-300 text-sm">
                    Actualmente disponible para proyectos freelance, colaboraciones y 
                    oportunidades que combinen desarrollo + seguridad.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíame un Mensaje</h3>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400">¡Mensaje enviado exitosamente!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;