import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ServersPage: React.FC = () => {
  const serverPlans = [
  {
    name: 'Servidor Dedicado Small - Miami',
    price: '60.00',
    setup: '0',
    specs: {
      cpu: 'Intel Dual Xeon 3.0 GHz',
      ram: '4 GB',
      storage: '500 GB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root / Escritorio remoto',
      'Soporte técnico 24/7'
    ]
  },
  {
    name: 'Servidor Dedicado Medium - Miami',
    price: '82.00',
    setup: '0',
    popular:true,
    specs: {
      cpu: 'Intel Dual Xeon 3.0 GHz',
      ram: '8 GB',
      storage: '1 TB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root / Escritorio remoto',
      'Soporte técnico 24/7'
    ]
  },
  {
    name: 'Servidor Dedicado Large - Miami',
    price: '120.00',
    setup: '0',
    specs: {
      cpu: 'Intel Dual Xeon 3.0 GHz',
      ram: '16 GB',
      storage: '1 TB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root / Escritorio remoto',
      'Soporte técnico 24/7'
    ]
  },
  {
    name: 'Servidor Dedicado Extra Large - Miami',
    price: '220.00',
    setup: '0',
    specs: {
      cpu: 'Intel Dual Xeon 3.0 GHz',
      ram: '32 GB',
      storage: '2x1 TB HDD',
      bandwidth: 'Ilimitado',
      connection: '1 Gbps'
    },
    features: [
      '1 IP dedicada (IPv4)',
      'Acceso root / Escritorio remoto',
      'Soporte técnico 24/7'
    ]
  }
];


  const useCases = [
    {
      icon: Monitor,
      title: 'Empresas Corporativas',
      description: 'Sitios web corporativos con alto tráfico, aplicaciones internas y sistemas de gestión empresarial.'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Tiendas online con miles de productos, procesamiento de pagos y gestión de inventarios.'
    },
    {
      icon: Database,
      title: 'Aplicaciones SaaS',
      description: 'Software como servicio, APIs de alto rendimiento y aplicaciones web complejas.'
    }
  ];

  const datacenterFeatures = [
    'Certificación Tier III+',
    'Redundancia eléctrica N+1',
    'Climatización avanzada',
    'Seguridad física 24/7',
    'Conectividad múltiple',
    'Monitoreo continuo'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg')] bg-cover bg-center bg-black opacity-20"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Servidores Dedicados de <span className="text-purple-400">Alto Rendimiento</span> en Miami
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Potencia completa para tu negocio. Hardware premium, conectividad excepcional 
            y soporte técnico especializado en español.
          </motion.p>
        </div>
      </section>

      {/* Server Plans */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes de Servidores Dedicados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Potencia y rendimiento garantizado para tus proyectos más exigentes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serverPlans.map((plan, index) => (
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
                  <Server className={`w-12 h-12 mx-auto mb-4 ${
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
                      <span>CPU: {plan.specs.cpu}</span>
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
                      <span>Storage: {plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>Ancho de banda: {plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span>Conexión: {plan.specs.connection}</span>
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
                          plan.popular ? 'text-purple-200' : 'text-green-500'
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

      {/* Datacenter Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Data Center de Miami
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Nuestros servidores están alojados en un data center de clase mundial 
                en Miami, con conexiones optimizadas para España y Latinoamérica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {datacenterFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Ver Certificaciones</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg"
                alt="Data Center Miami"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Casos de Uso
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Perfectos para proyectos empresariales que requieren máximo rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
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
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Form */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesitas una configuración personalizada?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestros expertos te ayudarán a encontrar la solución perfecta para tu proyecto.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Email empresarial"
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
                <select className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white/50">
                  <option value="">Tipo de proyecto</option>
                  <option value="corporate">Sitio Corporativo</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">Aplicación SaaS</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <textarea
                placeholder="Cuéntanos sobre tu proyecto y requisitos específicos..."
                rows={4}
                className="w-full mt-6 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default ServersPage;