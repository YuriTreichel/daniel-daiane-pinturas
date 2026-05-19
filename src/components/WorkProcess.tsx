import { motion } from 'motion/react';
import { ClipboardList, Shield, Layers, Paintbrush, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    step: '01',
    title: 'Visita & Orçamento',
    description: 'Avaliamos seu espaço presencialmente de forma gratuita, entendemos suas preferências e preparamos uma proposta comercial clara e detalhada.',
  },
  {
    icon: <Shield size={32} />,
    step: '02',
    title: 'Isolamento & Proteção',
    description: 'A limpeza é nossa prioridade. Cobrimos todos os móveis, pisos, tomadas e janelas com fitas e plásticos de alta qualidade antes de iniciar.',
  },
  {
    icon: <Layers size={32} />,
    step: '03',
    title: 'Preparação Profissional',
    description: 'Tratamos fissuras, trincas, umidade e aplicamos massa e fundos preparadores. Uma pintura durável exige uma superfície perfeitamente nivelada.',
  },
  {
    icon: <Paintbrush size={32} />,
    step: '04',
    title: 'Pintura de Alto Padrão',
    description: 'Aplicamos tintas premium com técnicas modernas e o ferramental de ponta necessário para garantir acabamento uniforme e cobertura máxima.',
  },
  {
    icon: <Sparkles size={32} />,
    step: '05',
    title: 'Limpeza & Entrega',
    description: 'Removemos todas as proteções, realizamos uma limpeza fina do ambiente e realizamos uma vistoria final junto com você para garantir sua satisfação total.',
  },
];

export const WorkProcess = () => {
  return (
    <section id="processo" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-widest uppercase mb-3 text-brand-primary block">Como Trabalhamos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-6 leading-tight max-w-2xl mx-auto">
            Nosso Processo Garantido de Execução
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Do primeiro contato até o pós-obra impecável, seguimos um padrão rigoroso para garantir o melhor acabamento com o mínimo de dor de cabeça.
          </p>
        </motion.div>

        {/* Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {/* Connection Line in Desktop (Hidden on mobile) */}
          <div className="absolute top-1/3 left-10 right-10 h-0.5 bg-gray-100 -z-10 hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 hover:bg-white rounded-3xl p-8 border border-gray-100/80 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between min-h-[320px]"
            >
              {/* Step number badge */}
              <div className="absolute top-6 right-6 text-5xl font-black text-gray-200/50 group-hover:text-brand-primary/10 transition-colors">
                {step.step}
              </div>

              <div>
                <div className="w-16 h-16 bg-white group-hover:bg-brand-primary group-hover:text-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:shadow-lg transition-all duration-300 mb-8 border border-gray-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
