import { motion } from "motion/react";

export const Stats = () => {
  return (
    <section className="w-full bg-brand-secondary py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-around items-center gap-8 text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <span className="text-5xl font-bold text-brand-primary">60+</span>
          <span className="text-sm font-bold leading-tight max-w-[120px] uppercase tracking-wider">Anos de Tradição e Excelência</span>
        </motion.div>
        <div className="hidden md:block w-px h-16 bg-white/10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <span className="text-4xl font-bold text-brand-primary">Familiar</span>
          <span className="text-sm font-bold leading-tight max-w-[100px] uppercase tracking-wider">Atendimento Personalizado</span>
        </motion.div>
        <div className="hidden md:block w-px h-16 bg-white/10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <span className="text-4xl font-bold text-brand-primary">Ferramentas</span>
          <span className="text-sm font-bold leading-tight max-w-[120px] uppercase tracking-wider">Qualidade e Acabamento</span>
        </motion.div>
      </div>
    </section>
  );
};
