import { motion } from 'motion/react';
import { Shield, Clock, ThumbsUp, Sparkles } from 'lucide-react';

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
    <section className="py-24 bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-brand-primary">Por Que Nos Escolher</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight text-white">
              Diferenciais que Fazem a Diferença no Seu Projeto
            </h3>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
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
                  <div className="mb-4 text-brand-primary">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{reason.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10 relative z-10 max-w-md w-full">
              <img 
                src="/assets/images/obra.jpg" 
                alt="Obra Daniel e Daiane Pinturas" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div 
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full z-0 opacity-50 bg-brand-primary filter blur-[50px]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
