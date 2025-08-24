import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  // Server, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hosting', path: '/hosting-wordpress' },
    { name: 'VPS', path: '/vps-hosting' },
    { name: 'Servidores', path: '/servidores-dedicados' },
    { name: 'Cloud', path: '/cloud-hosting' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const services = [
    'Servidores Dedicados',
    'VPS Hosting',
    'Web Hosting',
    'Cloud Hosting',
    'Dominios',
    'SSL Certificates'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Datacenter.Donhoster/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/don_hoster/reels/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Donhoster' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              
<Link to="https://donhoster.es/" className="flex items-center space-x-2 group">
  <motion.img
    src="https://www.donhoster.com/assets/logo-DqEtRenT.webp"
    alt="DonHoster Logo"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-32 h-auto object-contain"
  />
</Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Líder en soluciones de hosting empresarial con servidores en Miami. 
              Ofrecemos la mejor infraestructura tecnológica para tu negocio.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">info@donhoster.es</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Miami FL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe las últimas noticias y ofertas especiales.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 DonHoster España. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-y-condiciones" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;