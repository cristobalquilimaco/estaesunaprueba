import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Cpu, 
  HardDrive, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  ChevronDown
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';


const VPSPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof comparisonData>('vps');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

const vpsPlans = [
  {
    name: 'VPS Small - Miami',
    price: '14.00',
    setup: '0',
    specs: {
      cpu: '1 vCPU Xeon E3-1230 @ 3.3 GHz',
      ram: '1 GB',
      storage: '20 GB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root por SSH',
      'Soporte técnico 24/7'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=1&_gl=1*1t7b6j3*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MjkxOCRqNjAkbDAkaDA."
  },
  {
    name: 'VPS Medium - Miami',
    price: '20.00',
    setup: '0',
    popular:true,
    specs: {
      cpu: '2 vCPU Xeon E3-1230 @ 3.3 GHz',
      ram: '2 GB',
      storage: '50 GB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root por SSH',
      'Soporte técnico 24/7'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=3&_gl=1*ylg0vg*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzA0MSRqNjAkbDAkaDA."
  },
  {
    name: 'VPS Large - Miami',
    price: '27.00',
    setup: '0',
    specs: {
      cpu: '3 vCPU Xeon E3-1230 @ 3.3 GHz',
      ram: '3 GB',
      storage: '100 GB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root por SSH',
      'Soporte técnico 24/7'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=4&_gl=1*ylg0vg*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzA0MSRqNjAkbDAkaDA."
  },
  {
    name: 'VPS Extra Large - Miami',
    price: '35.00',
    setup: '0',
    specs: {
      cpu: '4 vCPU Xeon E3-1230 @ 3.3 GHz',
      ram: '4 GB',
      storage: '250 GB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root por SSH',
      'Soporte técnico 24/7'
    ],
    url: "https://my.donhoster.com/cart.php?a=add&pid=5&_gl=1*tj4z3z*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzA0MSRqNjAkbDAkaDA."
  }
];

interface ComparisionData{
  title: string;
  pros: string[];
  ideal: string;
  dedicated?: string[]
}

  const comparisonData: Record<'vps' | 'dedicated', ComparisionData>= {
    vps: {
      title: 'VPS Hosting',
      pros: [
        'Recursos dedicados garantizados',
        'Control completo del servidor',
        'Escalabilidad instantánea',
        'Mejor precio por rendimiento',
        'Fácil gestión y mantenimiento'
      ],
      ideal: 'Sitios web medianos, aplicaciones web, desarrollo y testing'
    },
    dedicated: {
      title: 'Servidor Dedicado',
      pros: [
        'Hardware físico completo',
        'Máximo rendimiento',
        'Sin vecinos en el servidor',
        'Personalización total',
        'Mejor para aplicaciones críticas'
      ],
      ideal: 'Grandes aplicaciones, alto tráfico, máxima seguridad'
    }
  };

  const faqs = [
    {
      question: '¿Qué diferencia hay entre VPS y hosting compartido?',
      answer: 'El VPS te ofrece recursos dedicados (CPU, RAM, almacenamiento) que no compartes con otros usuarios, mientras que en hosting compartido compartes todos los recursos del servidor. Esto significa mejor rendimiento, mayor control y más estabilidad.'
    },
    {
      question: '¿Puedo escalar mi VPS cuando lo necesite?',
      answer: 'Sí, puedes escalar tu VPS en cualquier momento. Podemos aumentar CPU, RAM y almacenamiento con mínimo tiempo de inactividad, normalmente en menos de 30 minutos.'
    },
    {
      question: '¿Incluye panel de control?',
      answer: 'Sí, todos nuestros planes VPS incluyen un panel de control intuitivo desde donde puedes gestionar tu servidor, crear copias de seguridad, monitorear recursos y configurar aplicaciones.'
    },
    {
      question: '¿Qué sistemas operativos están disponibles?',
      answer: 'Ofrecemos múltiples opciones: Ubuntu, CentOS, Debian, Windows Server, y otras distribuciones populares. También podemos instalar el SO que prefieras.'
    },
    {
      question: '¿Incluyen copias de seguridad automáticas?',
      answer: 'Sí, realizamos copias de seguridad automáticas diarias que se almacenan por 30 días. También puedes crear snapshots manuales cuando lo necesites.'
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
        <title>VPS Hosting Miami - Servidores Virtuales Escalables | DonHoster</title>
        <meta
          name="description"
          content="Contrata VPS Hosting en Miami con recursos dedicados, CPU Intel, HDD/SSD y soporte 24/7. Servidores virtuales escalables desde 14 USD/mes, ideales para España y Latinoamérica."
        />
        <meta
          name="keywords"
          content="vps miami, hosting vps, servidores virtuales, vps escalables, cloud vps, hosting españa, servidores dedicados miami"
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
          content="VPS Hosting en Miami - Servidores Virtuales Escalables | DonHoster"
        />
        <meta
          property="og:description"
          content="VPS Hosting en Miami con recursos dedicados, CPU Intel y soporte 24/7. Escalable y seguro desde 14 USD/mes."
        />
        <meta
          property="og:image"
          content="https://donhoster.es/assets/vps-miami.jpg"
        />
        <meta
          property="og:url"
          content="https://donhoster.es/vps-hosting-miami"
        />
        <meta property="og:site_name" content="DonHoster" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@donhoster" />
        <meta name="twitter:creator" content="@donhoster" />
        <meta
          name="twitter:title"
          content="VPS Hosting en Miami - Servidores Virtuales Escalables | DonHoster"
        />
        <meta
          name="twitter:description"
          content="Servidores VPS en Miami con recursos dedicados, escalabilidad y soporte 24/7. Planes desde 14 USD/mes."
        />
        <meta
          name="twitter:image"
          content="https://donhoster.es/assets/vps-miami-twitter.jpg"
        />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://donhoster.es/vps-hosting-miami" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://donhoster.es/vps-hosting-miami"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://donhoster.es/en/vps-hosting-miami"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://donhoster.es/vps-hosting-miami"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "VPS Hosting en Miami - Servidores Virtuales Escalables | DonHoster",
            "url": "https://donhoster.es/vps-hosting-miami",
            "description": "Contrata VPS Hosting en Miami con recursos dedicados, CPU Intel, HDD/SSD y soporte 24/7. Escalable y seguro desde 14 USD/mes, ideal para España y Latinoamérica.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg')] bg-cover bg-center bg-black opacity-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Hosting <span className="text-purple-400">VPS Rápido</span> y Escalable en Miami
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Servidores virtuales privados con recursos dedicados, control total 
            y escalabilidad instantánea. Perfecto para proyectos en crecimiento.
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
              <span>Ver Planes VPS</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* VPS Plans */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes VPS en Miami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recursos dedicados y rendimiento garantizado para tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white transform scale-105'
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
                  <Cloud className={`w-12 h-12 mx-auto mb-4 ${
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
                      <Cpu className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>RAM: {plan.specs.ram}</span>
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
  onClick={() => window.open(plan.url, '_blank')} 
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

      {/* Comparison Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              VPS vs. Servidor Dedicado
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Encuentra la solución que mejor se adapte a tus necesidades
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white dark:bg-gray-700 rounded-xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('vps')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'vps'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                VPS Hosting
              </button>
              <button
                onClick={() => setActiveTab('dedicated')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'dedicated'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                Servidor Dedicado
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  {activeTab === 'vps' ? (
                    <Cloud className="w-8 h-8 text-purple-600" />
                  ) : (
                    <Server className="w-8 h-8 text-purple-600" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {comparisonData[activeTab].title}
                </h3>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Ventajas:
                </h4>
                <ul className="space-y-3">
                  {comparisonData[activeTab].pros.map((pro, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  Ideal para:
                </h4>
                <p className="text-purple-700 dark:text-purple-300">
                  {comparisonData[activeTab].ideal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes sobre VPS
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resolvemos tus dudas más comunes sobre nuestros servicios VPS
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
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para empezar con tu VPS?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Configura tu servidor virtual en minutos y comienza a disfrutar 
            del control total sobre tu infraestructura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Contratar VPS Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            >
              Hablar con un Experto
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default VPSPage;