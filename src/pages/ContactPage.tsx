import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@donhoster.es',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 900 123 456',
      description: 'Soporte 24/7 en español'
    },
    {
      icon: MapPin,
      title: 'Oficinas España',
      content: 'Calle Serrano 123, 28006 Madrid',
      description: 'Horario: Lunes a Viernes 9:00-18:00'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: '24 horas, 7 días',
      description: 'Soporte técnico siempre disponible'
    }
  ];

  // const officeHours = [
  //   { day: 'Lunes - Viernes', hours: '09:00 - 18:00', type: 'Comercial' },
  //   { day: 'Sábados', hours: '10:00 - 14:00', type: 'Comercial' },
  //   { day: 'Domingos', hours: 'Cerrado', type: 'Comercial' },
  //   { day: 'Todos los días', hours: '24 horas', type: 'Soporte Técnico' }
  // ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-900 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg')] bg-cover bg-center"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-purple-400">Contacta</span> con Nosotros
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Nuestro equipo de expertos está aquí para ayudarte a encontrar 
            la solución perfecta para tu infraestructura digital.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-purple-600 mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Map */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-center mb-8">
                  <MessageCircle className="w-8 h-8 text-purple-600 mr-4" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Envíanos un Mensaje
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Te contactaremos en menos de 2 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Juan Pérez"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="juan@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="+34 600 123 456"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Mi Empresa SL"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Servicio de interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="hosting">Web Hosting</option>
                        <option value="vps">VPS Hosting</option>
                        <option value="dedicated">Servidor Dedicado</option>
                        <option value="cloud">Cloud Hosting</option>
                        <option value="migration">Migración</option>
                        <option value="consulting">Consultoría</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </motion.button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      * Campos obligatorios. Responderemos en menos de 2 horas.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Map & Office Hours */}
            <div className="space-y-8">
              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data centers
                </h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Miami FL<br />
                      
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Soporte técnico
                </h3>
<div className="space-y-4">
  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
    <div>
      <p className="font-medium text-gray-900 dark:text-white">
        Todos los días
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Abierto
      </p>
    </div>
    <p className="font-semibold text-green-600 dark:text-green-400">
      24 horas
    </p>
  </div>
</div>

              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Tienes Preguntas?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Estas son las consultas más frecuentes de nuestros clientes
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ¿Cuánto tiempo tarda en activarse mi servicio?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Los servicios de hosting se activan instantáneamente. Los VPS en 5-10 minutos 
                y los servidores dedicados en 2-4 horas máximo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ¿Incluyen migración gratuita?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, migramos tu sitio web desde cualquier proveedor sin coste adicional 
                y sin tiempo de inactividad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ¿El soporte es realmente 24/7?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, nuestro equipo técnico está disponible las 24 horas, los 7 días 
                de la semana por chat, email y teléfono.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ¿Puedo cambiar de plan cuando quiera?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutamente. Puedes escalar o cambiar tu plan en cualquier momento 
                con cambios que se aplican de forma inmediata.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nuestro equipo está esperando para ayudarte a encontrar la solución 
            perfecta para tu proyecto digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar Ahora</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat en Vivo</span>
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default ContactPage;