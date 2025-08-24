import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  HardDrive,
  Mail,
  ChevronDown
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const HostingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

const hostingPlans = [
  {
    name: 'Hosting Small',
    price: '2.60',
    setup: '0',
    specs: {
      websites: '1 Dominio permitido',
      storage: '500 MB',
      bandwidth: 'Ilimitado',
      email: '15 Cuentas de correo',
      ssl: 'SSL gratuito'
    },
    features: [
      'cPanel incluido',
      '2 Dominios adicionales',
      '2 Alias de dominio',
      '10 Subdominios',
      '5 Bases de datos MySQL',
      '5 Cuentas FTP',
      'Protección DDoS integrada',
      'Copias de seguridad automáticas',
      'Garantía de devolución de 30 días',
      'Soporte técnico 24/7',
      'Centro de datos en Miami, FL',
      'Servidores Idera by V8-925 ®'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=15"
  },
  {
    name: 'Hosting cPanel Medium',
    price: '4.99',
    setup: '0',
    specs: {
      websites: '1 Dominio permitido',
      storage: '1 GB',
      bandwidth: 'Ilimitado',
      email: '25 Cuentas de correo',
      ssl: 'SSL gratuito'
    },
    features: [
      'cPanel incluido',
      '3 Dominios adicionales',
      '3 Alias de dominio',
      '15 Subdominios',
      '5 Bases de datos MySQL',
      '5 Cuentas FTP',
      'Protección DDoS integrada',
      'Copias de seguridad automáticas',
      'Garantía de devolución de 30 días',
      'Soporte técnico 24/7',
      'Centro de datos en Miami, FL',
      'Servidores Idera by V8-925 ®'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=17"
  },
  {
    name: 'Hosting cPanel Large',
    price: '7.99',
    setup: '0',
    popular:true,
    specs: {
      websites: '1 Dominio permitido',
      storage: '2 GB',
      bandwidth: 'Ilimitado',
      email: '30 Cuentas de correo',
      ssl: 'SSL gratuito'
    },
    features: [
      'cPanel incluido',
      '5 Dominios adicionales',
      '5 Alias de dominio',
      '20 Subdominios',
      '10 Bases de datos MySQL',
      '5 Cuentas FTP',
      'Protección DDoS integrada',
      'Copias de seguridad automáticas',
      'Garantía de devolución de 30 días',
      'Soporte técnico 24/7',
      'Centro de datos en Miami, FL',
      'Servidores Idera by V8-925 ®'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=18"
  },
  {
    name: 'Hosting cPanel Extra',
    price: '23.99',
    setup: '0',
    specs: {
      websites: '1 Dominio permitido',
      storage: '3 GB',
      bandwidth: 'Ilimitado',
      email: '40 Cuentas de correo',
      ssl: 'SSL gratuito'
    },
    features: [
      'cPanel incluido',
      '7 Dominios adicionales',
      '7 Alias de dominio',
      '25 Subdominios',
      '15 Bases de datos MySQL',
      '10 Cuentas FTP',
      'Protección DDoS integrada',
      'Copias de seguridad automáticas',
      'Garantía de devolución de 30 días',
      'Soporte técnico 24/7',
      'Centro de datos en Miami, FL',
      'Servidores Idera by V8-925 ®'
    ],
    url:"https://my.donhoster.com/cart.php?a=add&pid=20"
  }
];


  const benefits = [
    {
      icon: Zap,
      title: 'Rendimiento Superior',
      description: 'Servidores SSD de última generación con tiempos de carga ultra rápidos. Tu sitio web siempre al máximo rendimiento.'
    },
    {
      icon: Shield,
      title: 'Máxima Seguridad',
      description: 'Protección avanzada contra malware, firewall configurado y certificados SSL incluidos en todos los planes.'
    },
    {
      icon: Mail,
      title: 'Migración Sin Estrés',
      description: 'Nuestro equipo técnico migra tu sitio web actual sin coste adicional y sin tiempo de inactividad.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué incluye la migración gratuita?',
      answer: 'Migramos completamente tu sitio web desde tu proveedor actual, incluyendo archivos, bases de datos, emails y configuraciones. El proceso es transparente y sin tiempo de inactividad.'
    },
    {
      question: '¿Cuánto tiempo tarda en activarse mi hosting?',
      answer: 'Tu cuenta se activa instantáneamente tras el pago. Recibirás los datos de acceso a cPanel en menos de 5 minutos para empezar a configurar tu sitio web.'
    },
    {
      question: '¿Ofrecen garantía de uptime?',
      answer: 'Sí, garantizamos 99.9% de uptime. Si no cumplimos esta promesa, compensamos automáticamente el tiempo perdido con crédito en tu cuenta.'
    },
    {
      question: '¿Puedo cambiar de plan cuando quiera?',
      answer: 'Absolutamente. Puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de control. Los cambios son inmediatos y sin complicaciones.'
    },
    {
      question: '¿Está incluido el certificado SSL?',
      answer: 'Sí, todos nuestros planes incluyen certificado SSL gratuito con renovación automática. Para planes superiores incluimos SSL premium y wildcard.'
    },
    {
      question: '¿Qué soporte técnico ofrecen?',
      answer: 'Soporte técnico 24/7 en español por chat, email y teléfono. Nuestro equipo está especializado en hosting y puede resolver cualquier consulta técnica.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
        <Helmet>
        {/* Meta básicas */}
        <title>Hosting Web cPanel en Miami - Rápido y Seguro | DonHoster</title>
        <meta
        name="description"
        content="Planes de hosting web cPanel en Miami con SSL gratis, soporte 24/7 y migración incluida. Desde 2.60 USD/mes. Ideal para proyectos en España y Latinoamérica."
        />
        <meta
          name="keywords"
          content="hosting web, hosting cpanel, alojamiento web miami, hosting barato, hosting españa, hosting wordpress, hosting seguro"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DonHoster" />
        <meta name="copyright" content="© 2025 DonHoster" />
        <meta
          name="google-site-verification"
          content="6rSogJvqCBWoYb9BDaCPSDNlzAm56y6cNhVgncvooF8"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hosting Web cPanel en Miami - Rápido y Seguro | DonHoster"
        />
        <meta
          property="og:description"
          content="Planes de hosting web cPanel en Miami con SSL gratis, soporte 24/7 y migración incluida. Desde 2.60 USD/mes."
        />
        <meta
          property="og:image"
          content="https://donhoster.es/imagen-hosting.jpg"
        />
        <meta property="og:url" content="https://donhoster.es/hosting" />
        <meta property="og:site_name" content="DonHoster" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@donhoster" />
        <meta name="twitter:creator" content="@donhoster" />
        <meta
          name="twitter:title"
          content="Hosting Web cPanel en Miami - Rápido y Seguro | DonHoster"
        />
        <meta
          name="twitter:description"
          content="Planes de hosting web cPanel en Miami con SSL gratis, soporte 24/7 y migración incluida. Desde 2.60 USD/mes."
        />
        <meta
          name="twitter:image"
          content="https://donhoster.es/imagen-hosting-twitter.jpg"
        />

        {/* Canonical + hreflang */}
        <link rel="canonical" href="https://donhoster.es/hosting-wordpress" />
        <link rel="alternate" hrefLang="es" href="https://donhoster.es/hosting" />
        <link rel="alternate" hrefLang="en" href="https://donhoster.es/hosting" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://donhoster.es/hosting"
        />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hosting Web cPanel en Miami - Rápido y Seguro | DonHoster",
            "url": "https://donhoster.es/hosting",
            "description": "Planes de hosting web cPanel en Miami con SSL gratis, soporte 24/7 y migración incluida. Desde 2.60 USD/mes. Ideal para proyectos en España y Latinoamérica.",
            "publisher": {
              "@type": "Organization",
              "name": "DonHoster",
              "url": "https://donhoster.es"
            }
          }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
<section className="relative py-16 lg:py-24 overflow-hidden">
  {/* Gradiente */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 opacity-80"></div>

  {/* Imagen de fondo con blur */}
  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg')] bg-cover bg-center filter blur-sm"></div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl lg:text-6xl font-bold mb-6"
    >
      Soluciones de <span className="text-purple-400">Hosting Fiables</span> y Asequibles
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
    >
      Hosting web optimizado para WordPress con rendimiento excepcional, 
      seguridad avanzada y soporte técnico premium en español.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <span>Ver Planes de Hosting</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  </div>
</section>


      {/* Hosting Plans */}
      <AnimatedSection className="py-16 lg:py-24">
        <div id='planes' className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes de Hosting Web
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Desde proyectos personales hasta sitios empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white transform scale-105'
                    : 'bg-white dark:bg-gray-700 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <Globe className={`w-12 h-12 mx-auto mb-4 ${
                    plan.popular ? 'text-purple-200' : 'text-purple-600'
                  }`} />
                  <h3 className={`text-2xl font-bold mb-4 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold">USD {plan.price}</span>
                    <span className={`text-lg ${
                      plan.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      /mes
                    </span>
                  </div>
                  <p className={`text-sm ${
                    plan.popular ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    Setup: ${plan.setup}
                  </p>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    Especificaciones:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Globe className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.websites}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>Ancho de banda: {plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.ssl}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className={`font-semibold mb-3 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    Incluido:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${
                          plan.popular ? 'text-purple-200' : 'text-purple-500'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  <span>Contratar Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ventajas de nuestro Hosting
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Todo lo que necesitas para el éxito de tu sitio web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* WordPress Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Optimizado para WordPress
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Hosting especializado en WordPress con todas las herramientas necesarias 
                para crear sitios web profesionales de forma rápida y segura.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Instalación de WordPress con 1 clic
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Temas premium incluidos
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Plugins de seguridad pre-configurados
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Actualizaciones automáticas
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Caché optimizado para máximo rendimiento
                  </span>
                </div>
              </div>

              <a href="#planes">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                  <span>Empezar con WordPress</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                alt="WordPress Hosting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes sobre Hosting
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Todo lo que necesitas saber sobre nuestros servicios de hosting
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para lanzar tu sitio web?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos que confían en nuestro hosting 
            para hacer crecer su presencia online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Empezar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            >
              Migración Gratuita
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default HostingPage;