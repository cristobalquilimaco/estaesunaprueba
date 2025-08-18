import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 

  Zap, 
  Shield, 
  Globe, 
  Database, 
  CheckCircle,
  ArrowRight,
  Star,

} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Zap,
      title: 'Velocidad Extrema',
      description: 'Servidores con tecnología SSD NVMe y conexiones de fibra óptica para máximo rendimiento.'
    },
    {
      icon: Shield,
      title: 'Seguridad Avanzada',
      description: 'Protección DDoS, firewall avanzado y certificados SSL incluidos en todos los planes.'
    },
    {
      icon: Globe,
      title: 'Conectividad Global',
      description: 'Data center en Miami con conexiones directas a Europa y Latinoamérica.'
    },
    {
      icon: Database,
      title: 'Copias de Seguridad',
      description: 'Backups automáticos diarios con restauración rápida incluida.'
    }
  ];


const plans = [
  {
    name: 'VPS en Miami, FL - Pequeño',
    price: '14',
    period: '/mes',
    features: [
      'Procesador 3.3 Ghz Xeon E3-1230 x1',
      '1 GB de Memoria RAM',
      '20 GB de Disco Duro',
      '1 Dirección IP (IPv4)',
      'Ancho de Banda Ilimitado',
      'Soporte 24/7'
    ],
    popular: false
  },
  {
    name: 'Servidores Dedicados en Miami, FL - Medio',
    price: '82',
    period: '/mes',
    features: [
      'Intel Dual Xeon 3.0 Ghz',
      '8 GB de Memoria RAM',
      '1 TB HDD',
      '1 IP (IPv4)',
      'Acceso Root / Escritorio Remoto',
      'Soporte 24/7'
    ],
    popular: true
  },
  {
    name: 'Cloud VM',
    price: '18.05',
    period: '/mes',
    features: [
      'Servidor Cloud KVM en Miami',
      'Incluye panel de control líder en la industria',
      'Familias de procesadores Intel Xeon',
      'Soporta hasta 32GB de memoria',
      'Hasta 2TB de almacenamiento SAN',

    ],
    popular: false
  },
  {
    name: 'EE.UU./Costa Este - Supermicro MicroCloud',
    price: '120',
    period: '/mes',
    features: [
      'Servidor Dedicado Bare Metal en EE.UU.',
      'Procesadores Intel Xeon E3 (E3-1230 v3, E3-1240 v3, E3-1270 v3)',
      'Soporta hasta 32GB DDR3 1600MHz',
      'Opciones de 2 x 3.5" SATA/SSD',
    ],
    popular: false
  }
];


  const testimonials = [
    {
      name: 'María González',
      company: 'TechSolutions SL',
      comment: 'Llevo 2 años con DonHoster y su servicio es excepcional. La velocidad de sus servidores ha mejorado significativamente el rendimiento de nuestro e-commerce.',
      rating: 5
    },
    {
      name: 'Carlos Martín',
      company: 'StartupInnovation',
      comment: 'El soporte técnico en español y la infraestructura en Miami nos permite servir tanto el mercado europeo como latinoamericano sin problemas.',
      rating: 5
    },
    {
      name: 'Ana Ruiz',
      company: 'Digital Agency',
      comment: 'Migrar a DonHoster fue la mejor decisión. Sus VPS son potentes y confiables, perfectos para nuestros proyectos de desarrollo.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: '¿Qué garantía de uptime ofrecen?',
      answer: 'Garantizamos 99.9% de uptime con compensación automática si no cumplimos esta promesa.'
    },
    {
      question: '¿Incluyen migración gratuita?',
      answer: 'Sí, ofrecemos migración gratuita desde tu proveedor actual sin tiempo de inactividad.'
    },
    {
      question: '¿El soporte técnico es en español?',
      answer: 'Absolutamente. Nuestro equipo de soporte está disponible 24/7 en español peninsular.'
    },
    {
      question: '¿Dónde están ubicados los servidores?',
      answer: 'Nuestro data center principal está en Miami, con conexiones optimizadas para España y Latinoamérica.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg')] bg-cover bg-center"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Servidores Dedicados en Miami con{' '}
            <span className="text-purple-400">99% de Fiabilidad</span> en Uptime
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            La mejor infraestructura tecnológica para tu negocio. 
            Hosting, VPS y servidores dedicados con soporte premium en español.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/servidores-dedicados">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 text-lg"
              >
                <span>Ver Planes</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-200 text-lg"
              >
                Hablar con Experto
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">5,000+</div>
              <div className="text-gray-300">Clientes Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-gray-300">Años Experiencia</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir DonHoster?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tecnología de vanguardia, soporte experto y la mejor conectividad para tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Plans Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes Destacados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Encuentra la solución perfecta para tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-purple-600 text-white transform scale-105'
                    : 'bg-white dark:bg-gray-700 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold">USD {plan.price}</span>
                    <span className={`text-lg ${
                      plan.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-500'
                      }`} />
                      <span className={
                        plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                      }>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Comprar Ahora
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Qué dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              La confianza de miles de empresas españolas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-700 p-8 lg:p-12 rounded-2xl shadow-xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-1xl text-gray-700 dark:text-gray-300 mb-8 italic">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-purple-600 dark:text-purple-400">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resolvemos tus dudas más comunes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para potenciar tu negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a miles de empresas que confían en DonHoster para su infraestructura digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Empezar Ahora</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/sobre-nosotros">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
              >
                Conoce más sobre nosotros
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Home;