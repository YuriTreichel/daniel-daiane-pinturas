import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react";

export const WhyTrustUs = () => {
  const trustFactors = [
    "Mais de 60 anos de tradição em pintura residencial e comercial",
    "Profissionais especialistas em acabamentos finos",
    "Especialistas em restaurações complexas",
    "Empresa familiar passada de geração em geração",
    "Uso de ferramentas e equipamentos profissionais"
  ];

  return (
    <section className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          <img src="/assets/images/interna.jpeg" className="w-full h-48 object-cover rounded-3xl shadow-md" />
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" className="w-full h-48 object-cover rounded-3xl shadow-md" />
          <img src="/assets/images/matt-pictures-jsotO6-hBsM-unsplash.jpg" className="w-full h-48 object-cover rounded-3xl shadow-md" />
          <img src="/assets/images/interna_2.jpeg" className="w-full h-48 object-cover rounded-3xl shadow-md" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-8 leading-tight">
            Por que confiar na Daniel & Daiane Pinturas
          </h2>
          
          <ul className="space-y-4 mb-10">
            {trustFactors.map((factor, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg font-medium">{factor}</span>
              </motion.li>
            ))}
          </ul>

          <a 
            href="https://www.instagram.com/danieledaianepinturas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-secondary text-white px-8 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-brand-primary transition-all shadow-md"
          >
            Conheça Nossos Serviços <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
