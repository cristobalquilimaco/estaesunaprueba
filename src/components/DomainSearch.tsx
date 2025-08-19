import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Check, X } from 'lucide-react';

interface DomainResult {
  domain: string;
  extension: string;
  available: boolean;
  price: string;
}

const DomainSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const extensions = [
    { ext: '.com', price: '$12.99' },
    { ext: '.net', price: '$14.99' },
    { ext: '.nl', price: '$16.99' }
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockResults: DomainResult[] = extensions.map(({ ext, price }) => ({
      domain: searchTerm.toLowerCase().replace(/[^a-z0-9]/g, ''),
      extension: ext,
      available: Math.random() > 0.3, // 70% chance of being available
      price: price
    }));

    setResults(mockResults);
    setIsSearching(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Encuentra tu dominio perfecto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Registra tu dominio y comienza tu presencia online hoy mismo
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative mb-8 w-full">
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar dominio (ej: miempresa)"
                className="flex-1  py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-l-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                disabled={isSearching}
              />
              <motion.button
                type="submit"
                disabled={isSearching || !searchTerm.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-r-xl transition-colors duration-200 flex items-center space-x-2"
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Buscando...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Buscar</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {isSearching ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl animate-pulse"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                        </div>
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={`${result.domain}${result.extension}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        result.available
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            result.available ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {result.available ? (
                              <Check className="w-4 h-4 text-white" />
                            ) : (
                              <X className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-1">
                              <Globe className="w-5 h-5 text-gray-500" />
                              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                {result.domain}{result.extension}
                              </span>
                            </div>
                            <p className={`text-sm ${
                              result.available
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-red-600 dark:text-red-400'
                            }`}>
                              {result.available ? 'Disponible' : 'No disponible'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {result.price}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            por año
                          </div>
                        </div>
                      </div>
                      {result.available && (
                        <div className="mt-4 flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
                          >
                            Registrar Dominio
                          </motion.button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainSearch;