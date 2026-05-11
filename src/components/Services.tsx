import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from "motion/react";

export const Services = () => {
  return (
    <section id="servicos" className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary max-w-md leading-tight">
            Serviços de Pintura Especializados para Cada Lar
          </h2>
          <div className="max-w-md">
            <p className="text-gray-600 mb-6">
              Na Daniel & Daiane Pinturas e Restaurações, oferecemos uma gama de serviços de alta qualidade, com técnica e perfeccionismo.
            </p>
            <a 
              href="https://www.instagram.com/danieledaianepinturas/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-brand-primary text-brand-primary px-5 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all"
            >
              Explore Mais <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[450px]">
          {/* Pintura Interna */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden group shadow-lg h-80 md:h-auto"
          >
            <img src="/assets/images/interna.jpeg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Pintura Interna</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Acabamentos perfeitos para renovar o interior do seu lar.
              </p>
            </div>
          </motion.div>

          {/* Pintura Externa */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden group shadow-lg h-80 md:h-auto"
          >
            <img src="/assets/images/externa.jpeg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Pintura Externa</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Proteção e estética para fachadas de alto padrão.
              </p>
            </div>
          </motion.div>

          {/* Restauração de Pinturas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group shadow-lg h-80 md:h-auto"
          >
            <img src="/assets/images/matt-pictures-jsotO6-hBsM-unsplash.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white font-bold text-2xl mb-2 leading-tight text-balance">Restauração de Pinturas</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Técnicas especializadas para recuperar o brilho original.
              </p>
            </div>
          </motion.div>

          {/* Pintura Predial */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden group shadow-lg h-80 md:h-auto"
          >
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Pintura Predial</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Logística e execução de alto desempenho para condomínios.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
