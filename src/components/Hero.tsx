import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="w-full pt-40 pb-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-secondary leading-[1.1] mb-6">
            Transforme sua<br />casa com pinturas<br />profissionais.
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            A Daniel & Daiane Pinturas e Restaurações oferece excelência e resultados impecáveis em Bento Gonçalves e região.
          </p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=5554999802228&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20pintura." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-3 hover:bg-brand-secondary hover:shadow-lg transition-all shadow-md group hover:-translate-y-0.5 active:translate-y-0"
            >
              Falar no WhatsApp 
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} />
              </span>
            </a>
            
            <a 
              href="#portfolio" 
              className="border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-brand-secondary hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver Portfólio
            </a>
          </motion.div>


          {/* Google Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
              <div>
                <div className="font-bold text-xl leading-none text-brand-secondary">60+ Anos</div>
                <div className="text-xs text-gray-500">de Tradição Familiar</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex -space-x-2 mb-1">
                <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=2" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=3" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=4" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-xs text-gray-500">(5.0)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 relative rounded-3xl overflow-hidden h-64 group flex items-center justify-center text-center p-8">
            <img src="/assets/images/interna.jpeg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-white font-bold text-3xl leading-tight">Interiores com estilo<br />e sofisticação</div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-48 group flex items-center justify-center text-center p-6">
            <img src="/assets/images/predial.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-white font-bold text-xl leading-tight">Fachadas<br />impecáveis</div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-48 group flex items-center justify-center text-center p-6">
            <img src="/assets/images/restauracao.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-white font-bold text-xl leading-tight">Restauração<br />de pinturas</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
