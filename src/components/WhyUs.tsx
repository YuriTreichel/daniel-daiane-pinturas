import { motion } from 'motion/react';
import { Shield, Clock, ThumbsUp, Sparkles } from 'lucide-react';

const COLORS = {
  navy: '#0B1528',
  orange: '#E84E36',
};

const reasons = [
  {
    icon: <Shield size={32} />,
    title: 'Garantia de Qualidade',
    description: 'Utilizamos as melhores ferramentas e equipamentos profissionais do mercado para garantir um acabamento impecável.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Pontualidade na Entrega',
    description: 'Respeitamos o seu tempo. Cumprimos rigorosamente os prazos estabelecidos no cronograma da obra.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Limpeza e Organização',
    description: 'Protegemos todo o ambiente antes de começar e entregamos o espaço limpo e pronto para uso após a finalização.',
  },
  {
    icon: <ThumbsUp size={32} />,
    title: 'Atendimento Personalizado',
    description: 'Acompanhamento próximo em todas as etapas, desde a escolha das cores até a entrega final do projeto.',
  },
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-[#0B1528] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: COLORS.orange }}>Por Que Nos Escolher</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Diferenciais que Fazem a Diferença no Seu Projeto
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Não somos apenas pintores, somos especialistas em transformar ambientes com cuidado, técnica e dedicação. Nosso compromisso é com a sua total satisfação.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-4" style={{ color: COLORS.orange }}>
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
                alt="Pintor detalhista" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div 
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full z-0 opacity-50"
              style={{ backgroundColor: COLORS.orange, filter: 'blur(50px)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
