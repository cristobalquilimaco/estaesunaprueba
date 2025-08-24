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
  ChevronDown,
  Shield,
  Globe,
  Headphones,
  Download,
  Settings,
  Monitor
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const CloudPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof comparisonData>('cloud');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cloudPlans = [
    {
      name: 'Cloud VPS Essential',
      subtitle: 'Cloud Miami 1',
      price: '23.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 2 Core',
        ram: '2 GB RAM memory',
        storage: '50 GB SATA SSD',
        bandwidth: '2TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Location Data Center Miami'
      },
      features: [
        '1 IP dedicada (IPv4)',
        'IPv6 Class /64 incluido',
        'Panel de control VMware',
        'Snapshots incluidos',
        'Acceso root completo'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=7"
    },
    {
      name: 'Cloud VPS Advanced',
      subtitle: 'Cloud Miami 2',
      price: '39.00',
      setup: '0',
      popular: true,
      specs: {
        cpu: 'Shared vCPU 2 Core',
        ram: '4 GB RAM memory',
        storage: '80 GB SATA SSD',
        bandwidth: '3TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Location Data Center Miami'
      },
      features: [
        '1 IP dedicada (IPv4)',
        'IPv6 Class /64 incluido',
        'Panel de control VMware',
        'Snapshots incluidos',
        'Acceso root completo'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=21"
    },
    {
      name: 'Cloud VPS Performance',
      subtitle: 'Cloud Miami 3',
      price: '59.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 4 Core',
        ram: '8 GB RAM memory',
        storage: '120 GB SATA SSD',
        bandwidth: '4TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Location Data Center Miami'
      },
      features: [
        '1 IP dedicada (IPv4)',
        'IPv6 Class /64 incluido',
        'Panel de control VMware',
        'Snapshots incluidos',
        'Acceso root completo'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=22"
    },
    {
      name: 'Cloud VPS Ultra',
      subtitle: 'Cloud Miami 4',
      price: '89.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 8 Core',
        ram: '16 GB RAM memory',
        storage: '160 GB SATA SSD',
        bandwidth: '5TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Location Data Center Miami'
      },
      features: [
        '1 IP dedicada (IPv4)',
        'IPv6 Class /64 incluido',
        'Panel de control VMware',
        'Snapshots incluidos',
        'Acceso root completo'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=23"
    }
  ];

  interface ComparisonItem {
    title: string;
    pros: string[];
    ideal: string;
    dedicated?: string[];
  }

  const comparisonData: Record <'cloud' | 'dedicated', ComparisonItem> = {
    cloud: {
      title: 'Cloud Computing',
      pros: [
        'Rendimiento de vanguardia con las últimas CPUs Intel',
        'Almacenamiento NVMe SSD de alta velocidad',
        'Red de alta velocidad y baja latencia',
        '99.9% de garantía de disponibilidad',
        'Escalabilidad instantánea de recursos'
      ],
      ideal: 'Sitios web de alto tráfico, aplicaciones empresariales, desarrollo y testing'
    },
    dedicated: {
      title: 'Servidor Dedicado',
      pros: [
        'Hardware físico completo',
        'Máximo rendimiento garantizado',
        'Sin vecinos en el servidor',
        'Personalización total del hardware',
        'Control absoluto del servidor'
      ],
      ideal: 'Aplicaciones críticas, máxima seguridad, alto procesamiento'
    }
  };

  
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Red Redundante',
      description: 'Infraestructura de red completamente redundante para garantizar la operación continua.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'CPUs Intel de Última Generación',
      description: 'Las últimas CPUs Intel, ofreciendo rendimiento de primer nivel para aplicaciones intensivas.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Snapshots de Servidor Virtual',
      description: 'Posibilidad de crear copias de la máquina virtual en un momento específico.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Elige Dónde Almacenar tus Datos',
      description: 'Posibilidad de elegir la infraestructura donde activar el servicio en Miami.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Almacenamiento SSD',
      description: 'Almacenamiento NVMe/SSD de última generación para máximo rendimiento.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Hipervisor VMware',
      description: 'Virtualización gestionada por VMware, empresa líder en infraestructura cloud.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es Cloud Computing y cómo se diferencia del hosting tradicional?',
      answer: 'Cloud Computing es una tecnología que permite acceder a recursos informáticos (servidores, almacenamiento, aplicaciones) a través de internet de forma escalable y flexible. A diferencia del hosting tradicional, ofrece mayor disponibilidad, escalabilidad automática y pago por uso, garantizando un 99.9% de uptime.'
    },
    {
      question: '¿Puedo escalar mi servidor cloud cuando mi proyecto crezca?',
      answer: 'Absolutamente sí. Nuestros servidores cloud permiten escalado vertical y horizontal en tiempo real. Puedes aumentar CPU, RAM y almacenamiento según la demanda de tu aplicación, sin tiempo de inactividad y con facturación por uso.'
    },
    {
      question: '¿Qué garantías de disponibilidad ofrecen sus servidores cloud?',
      answer: 'Ofrecemos una garantía de disponibilidad del 99.9% respaldada por SLA. Nuestra infraestructura redundante en Miami incluye múltiples conexiones de red, sistemas de alimentación redundantes y monitoreo 24/7 para asegurar la máxima disponibilidad.'
    },
    {
      question: '¿Incluye soporte técnico especializado en cloud computing?',
      answer: 'Sí, incluimos soporte técnico 24/7 especializado en cloud computing. Nuestro equipo de expertos te ayudará con la migración, configuración, optimización y resolución de cualquier incidencia en tu infraestructura cloud.'
    },
    {
      question: '¿Qué sistemas operativos están disponibles para los servidores cloud?',
      answer: 'Ofrecemos una amplia variedad de sistemas operativos: Ubuntu, CentOS, Debian, Windows Server, Red Hat Enterprise Linux y muchas otras distribuciones. También proporcionamos plantillas preconfiguradas para aplicaciones como WordPress, Magento y Joomla.'
    },
    {
      question: '¿Cómo funcionan los snapshots y las copias de seguridad en cloud?',
      answer: 'Los snapshots permiten crear instantáneas de tu servidor en cualquier momento, ideales para actualizaciones seguras. Además, realizamos copias de seguridad automáticas diarias que se almacenan por 30 días, garantizando la protección total de tus datos.'
    },
    {
      question: '¿Es posible migrar mi sitio web actual a su plataforma cloud?',
      answer: 'Sí, ofrecemos servicio gratuito de migración para sitios web y aplicaciones. Nuestro equipo técnico se encarga de transferir todos tus datos, configuraciones y aplicaciones sin afectar la disponibilidad de tu servicio.'
    },
    {
      question: '¿Qué ventajas ofrece tener el datacenter en Miami para España?',
      answer: 'Miami es un hub tecnológico estratégico que ofrece excelente conectividad con España y Europa. Garantizamos baja latencia, cumplimiento de normativas internacionales, y acceso rápido tanto para usuarios españoles como latinoamericanos, optimizando el rendimiento global de tu aplicación.'
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
  <title>Cloud Hosting VPS en Miami - Servidores Escalables | DonHoster</title>
  <meta 
    name="description" 
    content="Servidores Cloud VPS escalables en Miami con CPUs Intel, SSD NVMe y soporte 24/7. Planes desde 23 USD/mes. Ideal para España y Latinoamérica." 
  />
  <meta 
    name="keywords" 
    content="cloud hosting, vps cloud, servidores virtuales, hosting miami, cloud computing, vps españa, servidores escalables" 
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="DonHoster" />
  <meta name="copyright" content="© 2025 DonHoster" />
  <meta name="google-site-verification" content="6rSogJvqCBWoYb9BDaCPSDNlzAm56y6cNhVgncvooF8" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Cloud Hosting VPS en Miami - Servidores Escalables | DonHoster" />
  <meta property="og:description" content="Servidores Cloud VPS escalables en Miami con CPUs Intel, SSD NVMe y soporte 24/7. Planes desde 23 USD/mes." />
  <meta property="og:image" content="https://donhoster.es/imagen-compartir.jpg" />
  <meta property="og:url" content="https://donhoster.es/cloud" />
  <meta property="og:site_name" content="DonHoster" />
  <meta property="og:locale" content="es_ES" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@donhoster" />
  <meta name="twitter:creator" content="@donhoster" />
  <meta name="twitter:title" content="Cloud Hosting VPS en Miami - Servidores Escalables | DonHoster" />
  <meta name="twitter:description" content="Servidores Cloud VPS escalables en Miami con CPUs Intel, SSD NVMe y soporte 24/7. Planes desde 23 USD/mes." />
  <meta name="twitter:image" content="https://donhoster.es/imagen-twitter.jpg" />

  {/* Canonical + hreflang */}
  <link rel="canonical" href="https://donhoster.es/cloud" />
  <link rel="alternate" hrefLang="es" href="https://donhoster.es/cloud" />
  <link rel="alternate" hrefLang="en" href="https://donhoster.es/cloud" />
  <link rel="alternate" hrefLang="x-default" href="https://donhoster.es/cloud" />

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
      "name": "Cloud Hosting VPS en Miami - Servidores Escalables | DonHoster",
      "url": "https://donhoster.es/cloud",
      "description": "Servidores Cloud VPS escalables en Miami con CPUs Intel, SSD NVMe y soporte 24/7. Planes desde 23 USD/mes. Ideal para España y Latinoamérica.",
      "publisher": {
        "@type": "Organization",
        "name": "DonHoster",
        "url": "https://donhoster.es"
      }
    }
    `}
  </script>
</Helmet>


      {/* Hero Section - Nuevo diseño como la segunda imagen */}
      <section className="relative py-16 lg:py-24 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg')] bg-cover bg-center opacity-20"></div>
        
        {/* Efectos de luz verde */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl transform translate-x-1/2"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            
            {/* Lado izquierdo - Contenido principal */}
            <div className="text-white">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                CLOUD <span className="text-purple-400">VPS</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg lg:text-xl mb-8 text-gray-300 max-w-2xl"
              >
                El mejor VPS (Virtual Private Server) con toda la potencia y flexibilidad Cloud, 
                recursos garantizados, instalación de software o cualquier servicio web en minutos.
              </motion.p>

              {/* Iconos de tecnologías */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WP</span>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MG</span>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PHP</span>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm text-purple-300 mb-8 underline cursor-pointer"
              >
                y muchos más...
              </motion.p>

              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Ver precios
              </motion.button>
            </div>

            {/* Lado derecho - Elementos informativos flotantes */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Soporte 24x7</h4>
                    <p className="text-gray-300 text-sm">Asistencia técnica especializada</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-24 right-12 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Download className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">"Arrastra y monta" ISOs y plantillas</h4>
                    <p className="text-gray-300 text-sm">Instalación simplificada</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-48 right-0 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Datacenter en España, EEUU, Chile,</h4>
                    <h4 className="text-white font-semibold">Portugal, Ireland and Colombia</h4>
                    <p className="text-gray-300 text-sm">Red global de alta disponibilidad</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Plans Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes Cloud VPS en Miami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Rendimiento de vanguardia con las últimas CPUs Intel y almacenamiento NVMe SSD
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlans.map((plan, index) => (
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
                  <h3 className={`text-xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    plan.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {plan.subtitle}
                  </p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-sm">Starting since:</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold">USD {plan.price}</span>
                  </div>
                  <p className={`text-lg ${
                    plan.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    Monthly
                  </p>
                </div>

                {/* VMware badge */}
                <div className="text-center mb-6">
                  <span className={`inline-block px-3 py-1 text-xs rounded ${
                    plan.popular ? 'bg-purple-700 text-purple-200' : 'bg-purple-100 text-purple-600'
                  }`}>
                    vmware
                  </span>
                </div>

                {/* Specifications */}
                <div className="mb-6">
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
                      <span>{plan.specs.ram}</span>
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
                      <span>{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.support}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>{plan.specs.location}</span>
                    </div>
                  </div>
                </div>

                {/* Flag */}
                <div className="text-center mb-6">
                  <span className="text-sm">🇺🇸 Data Center United States</span>
                </div>

                <motion.button
                onClick={() => window.open(plan.url, '_blank')} 
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

      {/* Features Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Las Ventajas del Cloud Computing DonHoster
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La infraestructura tecnológica de DonHoster Cloud ofrece soluciones escalables y flexibles 
              para satisfacer las necesidades de cualquier tipo de proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cloud Computing vs. Servidor Dedicado
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Encuentra la solución que mejor se adapte a tus necesidades
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white dark:bg-gray-700 rounded-xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('cloud')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'cloud'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                Cloud Computing
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
                  {activeTab === 'cloud' ? (
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

      {/* Operating Systems Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sistemas Operativos para Cloud Computing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Configuración instantánea del sistema operativo en tu máquina virtual. 
              Nuestra plataforma soporta una amplia variedad de SO populares.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Linux</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                Ubuntu, CentOS, Debian, Red Hat Enterprise Linux y muchas otras distribuciones 
                disponibles con configuración automática y plantillas preinstaladas.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes sobre Cloud Computing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resolvemos tus dudas más comunes sobre nuestros servicios de cloud computing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
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
            ¿Necesitas ayuda? Llama a nuestro equipo de soporte galardonado
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Soporte 24/7 al +1 786 823 21 59. Configura tu servidor cloud en minutos 
            y comienza a disfrutar del control total sobre tu infraestructura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Contratar Cloud VPS Ahora</span>
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

export default CloudPage;