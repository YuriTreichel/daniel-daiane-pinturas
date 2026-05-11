import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Qual é a disponibilidade de vocês e quando podem começar?',
    answer: 'Nossa disponibilidade varia de acordo com os projetos em andamento, mas geralmente conseguimos iniciar novos trabalhos dentro de 1 a 2 semanas após o agendamento. Entre em contato para verificar nossa disponibilidade atual!'
  },
  {
    question: 'Que tipos de equipamentos vocês utilizam?',
    answer: 'Trabalhamos com as melhores ferramentas e equipamentos profissionais do mercado para garantir precisão técnica, durabilidade e um acabamento superior que valoriza o seu imóvel.'
  },
  {
    question: 'Quem trabalhará no meu projeto?',
    answer: 'Nossa equipe é formada por profissionais experientes e dedicados, liderados diretamente pelo Daniel e pela Daiane, garantindo que cada detalhe receba a atenção necessária.'
  },
  {
    question: 'Vocês realizam orçamentos gratuitos?',
    answer: 'Sim! Realizamos visitas técnicas e orçamentos detalhados sem compromisso em Bento Gonçalves e região.'
  },
  {
    question: 'Quais métodos de pagamento vocês aceitam?',
    answer: 'Aceitamos Pix, transferências bancárias e cartões de crédito, com opções de parcelamento para facilitar o seu projeto.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="w-full max-w-3xl bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-0 py-5">
              <button 
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>{faq.question}</span>
                {openIndex === idx ? <Minus size={20} className="text-brand-primary" /> : <Plus size={20} className="text-brand-secondary" />}
              </button>
              {openIndex === idx && (
                <p className="text-gray-600 mt-4 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <a href="tel:54999802228" className="bg-brand-secondary text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-primary transition-all shadow-md">
          Tire sua dúvida agora <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
};
