import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

import { 
  Server, 
  Cpu, 
  HardDrive, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const ServersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const recaptchaRef = useRef<ReCAPTCHA>(null);


  const RECAPTCHA_SITE_KEY = "6LfiuLArAAAAADoOfpT7SkSPAp0yt30Dokg-qUQ1";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      setMessage({ type: 'error', text: 'El nombre es requerido' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Ingresa un email válido' });
      return false;
    }
    if (!formData.telefono.trim()) {
      setMessage({ type: 'error', text: 'El teléfono es requerido' });
      return false;
    }
    if (!formData.tipoProyecto) {
      setMessage({ type: 'error', text: 'Selecciona el tipo de proyecto' });
      return false;
    }
    if (!formData.mensaje.trim()) {
      setMessage({ type: 'error', text: 'Describe tu proyecto' });
      return false;
    }
    return true;
  };

// Función submitForm corregida para tu componente React
// Función submitForm FINAL - Reemplaza tu función actual
// Función submitForm CORREGIDA para React
const submitForm = async (captchaToken: string | null = null) => {
  try {
    const requestData = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      tipoProyecto: formData.tipoProyecto,
      mensaje: formData.mensaje,
      captchaToken,
      timestamp: new Date().toISOString()
    };

    console.log('Enviando datos:', requestData);

    // ⭐ IMPORTANTE: Reemplaza con tu nueva URL de deployment
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwKAuEJsHSauBV0hq5JHvqi30BVX_tJdDjxVmezS0MCSPJqNI_EwiTfSPzYQ70w6eQSTA/exec';
    
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const responseText = await response.text();
    console.log('Response text:', responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      throw new Error('Respuesta inválida del servidor');
    }

    console.log('Resultado parseado:', result);
    
    if (result.success) {
      setMessage({ 
        type: 'success', 
        text: result.message || 'Solicitud enviada correctamente. Te contactaremos pronto.' 
      });
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoProyecto: '',
        mensaje: ''
      });
      setShowCaptcha(false);
      
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } else {
      if (result.needsCaptcha) {
        setShowCaptcha(true);
        setMessage({ type: 'warning', text: 'Completa el captcha para continuar' });
      } else {
        setMessage({ 
          type: 'error', 
          text: result.message || 'Error desconocido en el servidor' 
        });
      }
    }

  } catch (error) {
    console.error('Error completo:', error);
    
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      setMessage({ 
        type: 'error', 
        text: 'Error de conexión. Verifica que el Google Apps Script esté desplegado correctamente.' 
      });
    } else if (error instanceof Error) {
      setMessage({ 
        type: 'error', 
        text: `Error: ${error.message}` 
      });
    } else {
      setMessage({ 
        type: 'error', 
        text: 'Error desconocido. Intenta nuevamente.' 
      });
    }
  }
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    if (showCaptcha) {
      const captchaToken = recaptchaRef.current?.getValue();
      if (!captchaToken) {
        setMessage({ type: 'error', text: 'Completa el captcha' });
        setIsSubmitting(false);
        return;
      }
      await submitForm(captchaToken);
    } else {
      await submitForm();
    }

    setIsSubmitting(false);
  };

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
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=2&_gl=1*124z2fw*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
    },
    {
      name: 'Servidor Dedicado Medium - Miami',
      price: '82.00',
      setup: '0',
      popular: true,
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
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=8&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=9&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=10&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      <Helmet>
        {/* Meta básicas */}
        <title>Servidores Dedicados en Miami | DonHoster</title>
        <meta
          name="description"
          content="Contrata servidores dedicados en Miami con CPUs Intel Xeon, HDD/SSD y soporte técnico 24/7. Planes desde 60 USD/mes. Rendimiento ideal para España y Latinoamérica."
        />
        <meta
          name="keywords"
          content="servidores dedicados miami, hosting dedicado, dedicated servers, data center miami, hosting españa, servidores alto rendimiento"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DonHoster" />
        <meta name="copyright" content="© 2025 DonHoster" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Servidores Dedicados en Miami - Hosting de Alto Rendimiento | DonHoster"
        />
        <meta
          property="og:description"
          content="Servidores dedicados en Miami con CPU Xeon, ancho de banda ilimitado y soporte 24/7. Planes desde 60 USD/mes."
        />
        <meta property="og:image" content="https://donhoster.es/assets/dedicated-miami.jpg" />
        <meta property="og:url" content="https://donhoster.es/servidores-dedicados-miami" />
        <meta property="og:site_name" content="DonHoster" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@donhoster" />
        <meta name="twitter:creator" content="@donhoster" />
        <meta
          name="twitter:title"
          content="Servidores Dedicados en Miami - Hosting de Alto Rendimiento | DonHoster"
        />
        <meta
          name="twitter:description"
          content="Servidores dedicados con CPU Intel Xeon, almacenamiento HDD/SSD y soporte 24/7. Desde 60 USD/mes."
        />
        <meta name="twitter:image" content="https://donhoster.es/assets/dedicated-miami-twitter.jpg" />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://donhoster.es/servidores-dedicados" />
        <link rel="alternate" hrefLang="es" href="https://donhoster.es/servidores-dedicados" />
        <link rel="alternate" hrefLang="en" href="https://donhoster.com/dedicated-servers" />
        <link rel="alternate" hrefLang="x-default" href="https://donhoster.es/servidores-dedicados" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Servidores Dedicados en Miami - Hosting de Alto Rendimiento | DonHoster",
            "url": "https://donhoster.es/servidores-dedicados-miami",
            "description": "Contrata servidores dedicados en Miami con CPUs Intel Xeon, HDD/SSD y soporte técnico 24/7. Planes desde 60 USD/mes, ideales para España y Latinoamérica.",
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

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              {/* Message Display */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    message.type === 'success' ? 'bg-green-500/20 border border-green-500/30' :
                    message.type === 'warning' ? 'bg-yellow-500/20 border border-yellow-500/30' :
                    'bg-red-500/20 border border-red-500/30'
                  }`}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>{message.text}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre completo *"
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email empresarial *"
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30"
                />
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono *"
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30"
                />
                <select 
                  name="tipoProyecto"
                  value={formData.tipoProyecto}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white/50 focus:bg-white/30"
                >
                  <option className='text-purple-500' value="">Tipo de proyecto *</option>
                  <option className='text-purple-500' value="corporate">Sitio Corporativo</option>
                  <option className='text-purple-500' value="ecommerce">E-commerce</option>
                  <option className='text-purple-500' value="saas">Aplicación SaaS</option>
                  <option className='text-purple-500' value="other">Otro</option>
                </select>
              </div>
              
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre tu proyecto y requisitos específicos... *"
                rows={4}
                required
                className="w-full mt-6 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30"
              ></textarea>

              {/* reCAPTCHA */}
              {showCaptcha && (
                <div className="mt-6 flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    theme="dark"
                  />
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full mt-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar Cotización</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default ServersPage;