import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from "motion/react";

const areas = [
  'Bento Gonçalves',
  'Garibaldi',
  'Farroupilha',
  'Carlos Barbosa',
  'Monte Belo do Sul',
  'Pinto Bandeira',
  'Caxias do Sul'
];

export const ServiceAreas = () => {
  return (
    <section className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-6">
            Áreas Atendidas
          </h2>
          <p className="text-gray-600 mb-8 font-medium">
            Temos o orgulho de atender proprietários em:
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {areas.map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-primary transition-colors cursor-default"
              >
                <MapPin size={14} fill="currentColor" /> {area}
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            Independentemente da sua localização na região, nossa equipe entrega serviços de pintura de alto padrão que aumentam a beleza e o valor do seu patrimônio.
          </p>

          <a 
            href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-brand-secondary text-brand-secondary px-8 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
          >
            Falar com um Especialista <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg h-48">
            <img src="/assets/images/interna.jpeg" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-48 mt-8">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-48 -mt-8">
            <img src="/assets/images/matt-pictures-jsotO6-hBsM-unsplash.jpg" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-48">
            <img src="/assets/images/interna_2.jpeg" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
