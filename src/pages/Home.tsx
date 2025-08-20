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
  Check,
  Gift,
  Clock,
  Word as Wordpress,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import DomainSearch from '../components/DomainSearch';
import SupportBanner from '../components/SupportBanner';
import FAQ from '../components/FAQ';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

interface Testimonial {
  name: string;
  company: string;
  comment: string;
  rating: number;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features: Feature[] = [
    { icon: Zap, title: 'Velocidad Extrema', description: 'Servidores con tecnología SSD NVMe y conexiones de fibra óptica para máximo rendimiento.' },
    { icon: Shield, title: 'Seguridad Avanzada', description: 'Protección DDoS, firewall avanzado y certificados SSL incluidos en todos los planes.' },
    { icon: Globe, title: 'Conectividad Global', description: 'Data center en Miami con conexiones directas a Europa y Latinoamérica.' },
    { icon: Database, title: 'Copias de Seguridad', description: 'Backups automáticos diarios con restauración rápida incluida.' },
  ];

  const plans: Plan[] = [
    { name: 'VPS en Miami, FL - Pequeño', price: '14', period: '/mes', features: ['Procesador 3.3 Ghz Xeon E3-1230 x1','1 GB de Memoria RAM','20 GB de Disco Duro','1 Dirección IP (IPv4)','Ancho de Banda Ilimitado','Soporte 24/7'], popular: false },
    { name: 'Servidores Dedicados en Miami, FL - Medio', price: '82', period: '/mes', features: ['Intel Dual Xeon 3.0 Ghz','8 GB de Memoria RAM','1 TB HDD','1 IP (IPv4)','Acceso Root / Escritorio Remoto','Soporte 24/7'], popular: true },
    { name: 'Cloud VM', price: '18.05', period: '/mes', features: ['Servidor Cloud KVM en Miami','Incluye panel de control líder en la industria','Familias de procesadores Intel Xeon','Soporta hasta 32GB de memoria','Hasta 2TB de almacenamiento SAN'], popular: false },
    { name: 'EE.UU./Costa Este - Supermicro MicroCloud', price: '120', period: '/mes', features: ['Servidor Dedicado Bare Metal en EE.UU.','Procesadores Intel Xeon E3 (E3-1230 v3, E3-1240 v3, E3-1270 v3)','Soporta hasta 32GB DDR3 1600MHz','Opciones de 2 x 3.5" SATA/SSD'], popular: false },
  ];

  const testimonials: Testimonial[] = [
    { name: 'María González', company: 'TechSolutions SL', comment: 'Llevo 2 años con DonHoster y su servicio es excepcional. La velocidad de sus servidores ha mejorado significativamente el rendimiento de nuestro e-commerce.', rating: 5 },
    { name: 'Carlos Martín', company: 'StartupInnovation', comment: 'El soporte técnico en español y la infraestructura en Miami nos permite servir tanto el mercado europeo como latinoamericano sin problemas.', rating: 5 },
    { name: 'Ana Ruiz', company: 'Digital Agency', comment: 'Migrar a DonHoster fue la mejor decisión. Sus VPS son potentes y confiables, perfectos para nuestros proyectos de desarrollo.', rating: 5 },
    { name: 'Diego Fernández', company: 'E-Commerce Pro', comment: 'La estabilidad y velocidad de los servidores han incrementado nuestras ventas un 40%. El uptime del 99.9% no es solo una promesa, es una realidad.', rating: 5 },
    { name: 'Laura Sánchez', company: 'WebDesign Studio', comment: 'Como desarrolladora web, necesito servidores que respondan rápido. DonHoster supera todas mis expectativas con su rendimiento excepcional.', rating: 5 },
    { name: 'Roberto Jiménez', company: 'DataTech Solutions', comment: 'La migración fue completamente gratuita y sin interrupciones. Su equipo técnico nos guió en cada paso del proceso.', rating: 5 },
    { name: 'Carmen López', company: 'Marketing Digital Plus', comment: 'Llevamos 3 años con DonHoster y nunca hemos tenido problemas graves. Su soporte 24/7 en español es invaluable para nuestro negocio.', rating: 5 },
    { name: 'Alejandro Moreno', company: 'Tech Innovators', comment: 'Los precios son competitivos y la calidad del servicio es superior a otros proveedores que hemos probado en el pasado.', rating: 5 },
  ];

  const testimonialsPerSlide = isDesktop ? 3 : 1;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);
  const currentSlideTestimonials = testimonials.slice(currentSlide * testimonialsPerSlide, currentSlide * testimonialsPerSlide + testimonialsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % totalSlides), 5000);
    return () => clearInterval(interval);
  }, [isDesktop, totalSlides]);

  useEffect(() => setCurrentSlide(0), [isDesktop]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Hero Left Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                <Gift className="w-4 h-4 mr-2" /> Hasta 60% de descuento en hosting para WordPress
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Hosting optimizado para <span className="text-purple-600">WordPress</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4 mb-8">
              {['Dominio gratis','Migración de sitios web gratis','Ayuda las 24 horas'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/hosting-wordpress">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 text-lg">
                  <span>Empezar ya</span><ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Garantía de reembolso por 30 días</span>
            </motion.div>
          </div>

          {/* Hero Right Content */}
          <div className="relative">
            {/* Aquí puedes mantener los elementos visuales animados del hero */}
          </div>
        </div>
      </section>

      <DomainSearch />
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        {/* Features */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Por qué elegir DonHoster?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Tecnología de vanguardia, soporte experto y la mejor conectividad para tu proyecto.</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.3 }} className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-24">
        {/* Plans */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Planes Destacados</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Encuentra la solución perfecta para tu proyecto</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${plan.popular ? 'bg-purple-600 text-white transform scale-105' : 'bg-white dark:bg-gray-700 hover:shadow-xl'}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Más Popular</span></div>}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold">USD {plan.price}</span>
                  <span className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-300'}`}>{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-purple-200' : 'text-purple-500'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${plan.popular ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>Comprar Ahora</motion.button>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <SupportBanner />

      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        {/* Testimonials */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Qué dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">La confianza de miles de empresas españolas</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className={`grid gap-8 ${isDesktop ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
            {currentSlideTestimonials.map((t, i) => (
              <motion.div key={`${currentSlide}-${i}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white dark:bg-gray-700 p-6 lg:p-8 rounded-2xl shadow-xl text-center h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />)}</div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{t.comment}"</blockquote>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{t.name}</p>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center space-x-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </AnimatedSection>

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