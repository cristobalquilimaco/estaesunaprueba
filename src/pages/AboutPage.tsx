import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Shield,
  Heart,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Fundación de DonHoster',
      description: 'Inicio de operaciones en Miami con un enfoque en calidad y servicio personalizado.'
    },
    {
      year: '2019',
      title: 'Expansión a Miami',
      description: 'Apertura de nuestro data center en Miami para mejorar la conectividad global.'
    },
    {
      year: '2021',
      title: '1,000+ Clientes',
      description: 'Alcanzamos los mil clientes activos con una satisfacción del 98%.'
    },
    {
      year: '2023',
      title: 'Certificación ISO 27001',
      description: 'Obtención de certificación internacional de seguridad de la información.'
    },
    {
      year: '2024',
      title: 'Cloud Hosting',
      description: 'Lanzamiento de servicios cloud con tecnología de escalado automático.'
    },
    {
      year: '2025',
      title: '5,000+ Clientes',
      description: 'Más de 5,000 clientes confían en nuestra infraestructura para sus negocios.'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Seguridad de la Información' },
    { name: 'ISO 9001', description: 'Gestión de Calidad' },
    { name: 'PCI DSS', description: 'Seguridad de Datos de Pago' },
    { name: 'Tier III+', description: 'Certificación Data Center' }
  ];

  const partners = [
    'Intel', 'Dell', 'Cisco', 'VMware', 'CloudFlare', 'Veeam'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Protegemos tu información con los más altos estándares de seguridad del sector.'
    },
    {
      icon: Zap,
      title: 'Rendimiento',
      description: 'Infraestructura de última generación para garantizar el máximo rendimiento.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Comprometidos con el éxito de nuestros clientes y su crecimiento digital.'
    },
    {
      icon: Users,
      title: 'Soporte',
      description: 'Equipo humano especializado disponible 24/7 para resolver cualquier consulta.'
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
        {/* Meta etiquetas básicas */}
        <html lang="es" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Título de la página (58 caracteres) */}
        <title>Sobre DonHoster | 8 Años Liderando el Hosting en España</title>
        
        {/* Meta description (157 caracteres) */}
        <meta name="description" content="Conoce DonHoster: 8 años ofreciendo hosting empresarial en España. Certificaciones ISO 27001, data center Miami, 5000+ clientes y soporte 24/7." />
        
        {/* Meta keywords */}
        <meta name="keywords" content="donhoster historia, hosting empresarial españa, certificación iso 27001, data center miami, hosting españa empresa, valores donhoster" />
        
        {/* Meta robots */}
        <meta name="robots" content="index, follow" />
        
        {/* Autor y copyright */}
        <meta name="author" content="DonHoster España" />
        <meta name="copyright" content="© 2025 DonHoster España" />
        
        {/* Open Graph para redes sociales */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre DonHoster | 8 Años Liderando el Hosting en España" />
        <meta property="og:description" content="Descubre la historia de DonHoster: 8 años de experiencia, certificaciones internacionales, data center en Miami y más de 5000 clientes satisfechos." />
        <meta property="og:image" content="https://donhoster.es/images/sobre-donhoster-empresa-spain.jpg" />
        <meta property="og:url" content="https://donhoster.es/sobre-nosotros" />
        <meta property="og:site_name" content="DonHoster España" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DonHoster" />
        <meta name="twitter:creator" content="@DonHoster" />
        <meta name="twitter:title" content="Sobre DonHoster | 8 Años Liderando el Hosting en España" />
        <meta name="twitter:description" content="8 años de experiencia en hosting empresarial, certificaciones ISO y data center Miami." />
        <meta name="twitter:image" content="https://donhoster.es/images/sobre-donhoster-empresa-spain.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://donhoster.es/sobre-nosotros" />
        
        {/* Hreflang para sitios multiidioma */}
        <link rel="alternate" hrefLang="es" href="https://donhoster.es/sobre-nosotros" />
        <link rel="alternate" hrefLang="en" href="https://donhoster.com/about-donhoster" />
        <link rel="alternate" hrefLang="x-default" href="https://donhoster.es/sobre-nosotros" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* DNS prefetch para mejorar velocidad */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="6rSogJvqCBWoYb9BDaCPSDNlzAm56y6cNhVgncvooF8" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Sobre DonHoster España",
            "url": "https://donhoster.es/sobre-nosotros",
            "@id": "https://donhoster.es/sobre-nosotros#webpage",
            "mainEntity": {
              "@type": "Organization",
              "name": "DonHoster España",
              "@id": "https://donhoster.es/#organization",
              "url": "https://donhoster.es",
              "logo": "https://donhoster.es/images/donhoster-logo.png",
              "foundingDate": "2017",
              "description": "Empresa de hosting empresarial con 8 años de experiencia, certificaciones ISO 27001 y data center en Miami.",
              "numberOfEmployees": "50-100",
              "awards": [
                "Certificación ISO 27001 - Seguridad de la Información",
                "Certificación ISO 9001 - Gestión de Calidad",
                "Certificación PCI DSS - Seguridad de Datos de Pago",
                "Certificación Tier III+ - Data Center"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES",
                "addressRegion": "España"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-900-123-456",
                "contactType": "customer service",
                "areaServed": "ES",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://twitter.com/donhoster",
                "https://linkedin.com/company/donhoster"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://donhoster.es"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sobre Nosotros",
                  "item": "https://donhoster.es/sobre-nosotros"
                }
              ]
            }
          }
        `}</script>
        
        {/* CSS crítico inline para mejorar Core Web Vitals */}
        <style>{`
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
          .text-shadow-lg { text-shadow: 3px 3px 6px rgba(0,0,0,0.7); }
        `}</style>
        
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>
-        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center"></div>
+        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center"></div>
+        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
+        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Sobre <span className="text-purple-400">DonHoster</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            8 años de experiencia proporcionando soluciones de hosting empresarial 
            con tecnología de vanguardia y soporte humano excepcional.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Qué nos mueve
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Proporcionar soluciones de hosting empresarial de alta calidad que permitan 
                a nuestros clientes centrarse en hacer crecer sus negocios, mientras nosotros 
                mantenemos su infraestructura digital funcionando de manera óptima, segura 
                y confiable las 24 horas del día.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Hacia dónde vamos
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ser el proveedor de hosting de referencia para empresas españolas y 
                latinoamericanas, reconocido por nuestra excelencia técnica, innovación 
                constante y compromiso inquebrantable con el éxito de nuestros clientes 
                en el mundo digital.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              8 años innovando en soluciones de hosting
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-purple-600">
                    {milestone.year}
                  </span>
                </div>
                
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mr-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-purple-300"></div>
                  )}
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      {/* Values */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Los principios que guían nuestro trabajo día a día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications & Partners */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="text-center mb-12">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Certificaciones
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Cumplimos con los más altos estándares internacionales
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div>
              <div className="text-center mb-12">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Partners Tecnológicos
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Trabajamos con los líderes de la industria
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {partner}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a miles de empresas que confían en DonHoster para su infraestructura digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Conoce Nuestros Servicios
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            >
              Contáctanos
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default AboutPage;