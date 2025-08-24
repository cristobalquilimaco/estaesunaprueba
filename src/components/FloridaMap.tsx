import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Shield, Globe } from 'lucide-react';

const FloridaMap: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Florida SVG Map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          width="320"
          height="200"
          viewBox="0 0 320 200"
          className="drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Florida shape */}
          <motion.path
            d="M50 80 L80 75 L120 70 L160 65 L200 70 L240 75 L270 85 L290 100 L300 120 L295 140 L285 155 L270 165 L250 170 L220 175 L190 180 L160 175 L130 170 L100 165 L80 155 L65 140 L55 120 L50 100 Z M200 120 L220 130 L240 140 L250 150 L245 160 L230 165 L210 160 L195 150 L190 135 L195 125 Z"
            fill="url(#floridaGradient)"
            stroke="#7c3aed"
            strokeWidth="2"
            className="filter drop-shadow-md"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="floridaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="50%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Miami marker */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
          >
            {/* Pulsing circle */}
            <motion.circle
              cx="240"
              cy="150"
              r="8"
              fill="#ef4444"
              className="opacity-30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main marker */}
            <motion.circle
              cx="240"
              cy="150"
              r="6"
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="2"
              filter="url(#glow)"
              animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Marker pin */}
            <motion.path
              d="M240 140 L240 150 L245 155 L240 160 L235 155 Z"
              fill="#dc2626"
              stroke="#ffffff"
              strokeWidth="1"
              animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.g>

          {/* City labels */}
          <text x="245" y="135" className="text-xs font-semibold fill-gray-700 dark:fill-gray-300">
            Miami
          </text>
          
          {/* Other major cities for context */}
          <circle cx="120" cy="100" r="2" fill="#6b7280" />
          <text x="125" y="105" className="text-xs fill-gray-500">Tampa</text>
          
          <circle cx="180" cy="90" r="2" fill="#6b7280" />
          <text x="185" y="95" className="text-xs fill-gray-500">Orlando</text>
          
          <circle cx="90" cy="120" r="2" fill="#6b7280" />
          <text x="95" y="125" className="text-xs fill-gray-500">Tallahassee</text>
        </motion.svg>
      </div>

      {/* Info popup when hovering Miami */}
      <motion.div
        className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 max-w-xs"
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 text-red-500 mr-2" />
          <h4 className="font-bold text-gray-900 dark:text-white">
            Data Center Miami
          </h4>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Globe className="w-4 h-4 mr-2 text-blue-500" />
            <span>Tier III Certified</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
            <span>10Gbps Connectivity</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Shield className="w-4 h-4 mr-2 text-green-500" />
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
            🚀 Latencia ultra-baja para América Latina
          </p>
        </div>
      </motion.div>

      {/* Connection lines animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M240 150 Q200 120 160 100 Q120 80 80 90"
          stroke="url(#connectionGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M240 150 Q280 130 300 100"
          stroke="url(#connectionGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
        />
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white p-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">Data Center Activo</span>
          </div>
          <div className="text-right">
            <div className="font-semibold">Miami, Florida</div>
            <div className="text-xs opacity-90">Conectividad Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloridaMap;
