import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Clock, Globe, CheckCircle, X, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  time: string;
}

const SupportBanner: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hola, me gustaría migrar mi sitio web a DonHoster",
      sender: 'user',
      time: '14:32'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      text: "Accede a soporte experto cuando lo necesites a través del chat o email."
    },
    {
      icon: Globe,
      text: "Nuestros especialistas hablan español, por lo que no tendrás ningún problema de comunicación."
    },
    {
      icon: Clock,
      text: "Dedica menos tiempo a esperar, pues nuestro ágil equipo de soporte suele responder en menos de 2 minutos."
    }
  ];

  const supportResponses = [
    "¡Hola! Es un placer ayudarte. Es muy fácil, solo debes seguir 3 pasos. Te muestro cómo hacerlo.",
    "Perfecto, puedo ayudarte con la migración. ¿Qué tipo de sitio web tienes actualmente?",
    "Sin problema, ofrecemos migración gratuita para todos nuestros planes. ¿Te gustaría que programemos la migración?",
    "Excelente elección. Te haré llegar los detalles por email para comenzar el proceso.",
    "¿Tienes alguna pregunta adicional sobre nuestros servicios?",
    "Estoy aquí para ayudarte con cualquier duda que tengas."
  ];

  const userMessages = [
    "¿Incluyen migración gratuita?",
    "Tengo un sitio de WordPress",
    "Sí, me gustaría programarla",
    "¡Perfecto! Muchas gracias por la ayuda",
    "¿Qué planes de hosting tienen disponibles?"
  ];

  // Auto-show chat after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time conversation
  useEffect(() => {
    if (messages.length === 1 && showChat) {
      // Start the conversation simulation
      const simulateConversation = async () => {
        let messageIndex = 0;
        
        const addMessage = async (isSupport: boolean) => {
          setIsTyping(isSupport);
          
          // Typing delay
          await new Promise(resolve => setTimeout(resolve, isSupport ? 2000 : 1500));
          
          setIsTyping(false);
          
          const currentTime = new Date().toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
          });

          const newMessage: Message = {
            id: messages.length + messageIndex + 2,
            text: isSupport ? supportResponses[messageIndex] : userMessages[messageIndex],
            sender: isSupport ? 'support' : 'user',
            time: currentTime
          };

          setMessages(prev => [...prev, newMessage]);
          messageIndex++;
        };

        // First support response
        await addMessage(true);
        
        // Continue conversation
        for (let i = 0; i < Math.min(userMessages.length, 3); i++) {
          await new Promise(resolve => setTimeout(resolve, 3000));
          await addMessage(false); // User message
          
          if (i < supportResponses.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await addMessage(true); // Support response
          }
        }
      };

      const timer = setTimeout(simulateConversation, 2000);
      return () => clearTimeout(timer);
    }
  }, [showChat, messages.length]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Activo</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ayuda 24/7 y en español
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowChat(true)}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Obtener ayuda</span>
            </motion.button>
          </div>

          {/* Right Content - Chat Simulation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Profile Image */}
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                  alt="Support Representative"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  ¿Por qué elegir a DonHoster?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Porque sabemos que hasta la mejor tecnología necesita de la gente más competente. Por eso, ofrecemos asistencia técnica de expertos, entre muchas otras cosas.
                </p>
              </div>
            </motion.div>

            {/* Floating Chat Widget */}
            <AnimatePresence>
              {showChat && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="absolute top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Chat Header */}
                  <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold">Soporte DonHoster</p>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs">Activo</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowChat(false)}
                      className="text-white/80 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-gray-500">Escribiendo...</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;