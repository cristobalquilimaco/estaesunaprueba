import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '¿Qué garantía de uptime ofrecen?',
      answer: 'Garantizamos 99.9% de uptime con compensación automática si no cumplimos esta promesa. Nuestro data center cuenta con infraestructura redundante y sistemas de respaldo para asegurar la máxima disponibilidad de tu sitio web.'
    },
    {
      question: '¿Incluyen migración gratuita?',
      answer: 'Sí, ofrecemos migración gratuita desde tu proveedor actual sin tiempo de inactividad. Nuestro equipo técnico se encarga de todo el proceso, incluyendo la transferencia de archivos, bases de datos y configuraciones.'
    },
    {
      question: '¿El soporte técnico es en español?',
      answer: 'Absolutamente. Nuestro equipo de soporte está disponible 24/7 en español peninsular. Contamos con técnicos especializados que entienden las necesidades específicas del mercado español y latinoamericano.'
    },
    {
      question: '¿Dónde están ubicados los servidores?',
      answer: 'Nuestro data center principal está en Miami, con conexiones optimizadas para España y Latinoamérica. Esta ubicación estratégica nos permite ofrecer una latencia mínima y excelente rendimiento para usuarios de ambos continentes.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias. Todos los pagos son procesados de forma segura a través de plataformas certificadas.'
    },
    {
      question: '¿Ofrecen copias de seguridad automáticas?',
      answer: 'Sí, realizamos copias de seguridad automáticas diarias de todos tus datos. Además, mantenemos múltiples versiones de backup para que puedas restaurar tu sitio a cualquier punto anterior si es necesario.'
    },
    {
      question: '¿Puedo actualizar o degradar mi plan en cualquier momento?',
      answer: 'Por supuesto. Puedes cambiar tu plan de hosting en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente y facturamos la diferencia de forma proporcional.'
    },
    {
      question: '¿Qué sucede si mi sitio web excede los recursos del plan?',
      answer: 'Te notificaremos proactivamente si tu sitio está cerca de los límites de recursos. Podrás actualizar tu plan fácilmente o nuestro equipo te ayudará a optimizar el rendimiento de tu sitio web.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Resolvemos tus dudas más comunes
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;