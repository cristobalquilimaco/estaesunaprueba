import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Globe, Database, CheckCircle, ArrowRight, Star, Check, Gift, Clock, WholeWord as Wordpress } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import DomainSearch from '../components/DomainSearch';
import SupportBanner from '../components/SupportBanner';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Hook para detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    },
    {
      name: 'Diego Fernández',
      company: 'E-Commerce Pro',
      comment: 'La estabilidad y velocidad de los servidores han incrementado nuestras ventas un 40%. El uptime del 99.9% no es solo una promesa, es una realidad.',
      rating: 5
    },
    {
      name: 'Laura Sánchez',
      company: 'WebDesign Studio',
      comment: 'Como desarrolladora web, necesito servidores que respondan rápido. DonHoster supera todas mis expectativas con su rendimiento excepcional.',
      rating: 5
    },
    {
      name: 'Roberto Jiménez',
      company: 'DataTech Solutions',
      comment: 'La migración fue completamente gratuita y sin interrupciones. Su equipo técnico nos guió en cada paso del proceso.',
      rating: 5
    },
    {
      name: 'Carmen López',
      company: 'Marketing Digital Plus',
      comment: 'Llevamos 3 años con DonHoster y nunca hemos tenido problemas graves. Su soporte 24/7 en español es invaluable para nuestro negocio.',
      rating: 5
    },
    {
      name: 'Alejandro Moreno',
      company: 'Tech Innovators',
      comment: 'Los precios son competitivos y la calidad del servicio es superior a otros proveedores que hemos probado en el pasado.',
      rating: 5
    }
  ];

  // Función para obtener testimonios por slide
  const getTestimonialsPerSlide = () => {
    return isDesktop ? 3 : 1;
  };

  // Función para obtener el número total de slides
  const getTotalSlides = () => {
    const testimonialsPerSlide = getTestimonialsPerSlide();
    return Math.ceil(testimonials.length / testimonialsPerSlide);
  };

  // Función para obtener testimonios del slide actual
  const getCurrentSlideTestimonials = () => {
    const testimonialsPerSlide = getTestimonialsPerSlide();
    const startIndex = currentSlide * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  // Efecto para el auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
    }, 5000);

    return () => clearInterval(interval);
  }, [isDesktop, testimonials.length]);

  // Resetear slide cuando cambia el tamaño de pantalla
  useEffect(() => {
    setCurrentSlide(0);
  }, [isDesktop]);

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                  <Gift className="w-4 h-4 mr-2" />
                  Hasta 60% de descuento en hosting para WordPress
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
              >
                Hosting optimizado para{' '}
                <span className="text-purple-600">WordPress</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Dominio gratis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Migración de sitios web gratis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Ayuda las 24 horas</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link to="/hosting-wordpress">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 text-lg"
                  >
                    <span>Empezar ya</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Shield className="w-4 h-4" />
                <span>Garantía de reembolso por 30 días</span>
              </motion.div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                {/* Main Browser Window */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 ml-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">tudominio.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4">
                      <h3 className="font-bold text-2xl text-purple-800 dark:text-purple-200 mb-2">
                        Tu Sitio Web
                      </h3>
                      <p className="text-purple-600 dark:text-purple-300 text-sm">
                        Hosting optimizado para WordPress
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex items-center justify-center">
                        <Wordpress className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex items-center justify-center">
                        <Database className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">99.9% Uptime</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Garantizado</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">Soporte 24/7</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">En español</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3"
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">$2.60</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">/mes</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime Garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Soporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Clientes Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-300">Años Experiencia</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domain Search Section */}
      <DomainSearch />

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

      {/* Support Banner */}
      <SupportBanner />

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Qué dicen nuestros clientes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              La confianza de miles de empresas españolas
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={`testimonial-slide-${currentSlide}`}
                  custom={currentSlide}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    rotateY: { duration: 0.6 }
                  }}
                  className={`grid gap-8 ${
                    isDesktop ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'
                  }`}
                >
                  {getCurrentSlideTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${currentSlide}-testimonial-${index}`}
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 15 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 lg:p-8 rounded-2xl shadow-xl text-center h-full flex flex-col justify-between relative overflow-hidden group"
                    >
                      {/* Background gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="flex justify-center mb-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0, rotate: -180 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.2 + 0.4 + (i * 0.1),
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              <Star className="w-6 h-6 text-yellow-400 fill-current mx-0.5" />
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <motion.blockquote 
                          className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        >
                          <span className="text-4xl text-purple-300 absolute -top-2 -left-2">"</span>
                          <span className="relative z-10">{testimonial.comment}</span>
                          <span className="text-4xl text-purple-300 absolute -bottom-4 -right-2">"</span>
                        </motion.blockquote>
                      </div>
                      
                      <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                      >
                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-4" />
                        <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </motion.div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Indicators */}
            <motion.div 
              className="flex justify-center space-x-3 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {Array.from({ length: getTotalSlides() }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  {index === currentSlide && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Navigation arrows for desktop */}
            {isDesktop && (
              <>
                <motion.button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides())}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </motion.button>
                <motion.button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % getTotalSlides())}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <FAQ />

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