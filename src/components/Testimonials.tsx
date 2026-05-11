import { ArrowUpRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Daniel Deniz Kuff',
    company: 'Cliente Google',
    text: 'Atendimento impecável e cuidados em geral com o capricho e a entrega do serviço, estão de parabéns!',
    rating: 5
  },
  {
    name: 'Mateuzinho 2k',
    company: 'Cliente Google',
    text: 'Um ótimo atendimento, rápido e prático, um ótimo serviço prestado com muita fluidez e muito rápido, super recomendo o contato com esta empresa.',
    rating: 5
  },
  {
    name: 'Rafael Kraus',
    company: 'Cliente Google',
    text: 'Trabalho de excelente qualidade, equipe pontual e muito caprichosa. Super indico!',
    rating: 5
  },
  {
    name: 'Geisy Pan Giacomini',
    company: 'Cliente Google',
    text: 'Empresa comprometida em atender os prazos e principalmente com a qualidade do serviço! Se mostraram dispostos a demandas extras e o resultado foi excelente.',
    rating: 5
  },
  {
    name: 'Dra. Andreia De Bona',
    company: 'Cliente Google',
    text: 'Super indico. Empresa nota 10, desde o primeiro contato até o final da obra. Profissionalismo total.',
    rating: 5
  },
  {
    name: 'Andresa Camargo',
    company: 'Cliente Google',
    text: 'Empresa muito séria e comprometida com o cliente, trabalho limpo e organizado. Super indico.',
    rating: 5
  },
  {
    name: 'Wellington Ornelio',
    company: 'Cliente Google',
    text: 'Empresa toop serviços impecáveis profissionais qualificados.',
    rating: 5
  },
  {
    name: 'Simone Witniski',
    company: 'Cliente Google',
    text: 'Empresa excelente, trabalho cuidadoso cumpre horário e as exigências... Super recomendo 👍',
    rating: 5
  },
  {
    name: 'Paul',
    company: 'Cliente Google',
    text: 'Trabalho de excelente qualidade, muito capricho e organização. Recomendo com certeza!',
    rating: 5
  },
  {
    name: 'Joice Wollmann',
    company: 'Cliente Google',
    text: 'Excelente trabalho, super indico! Atendimento nota 10.',
    rating: 5
  },
  {
    name: 'Ricardo Oliveira',
    company: 'Cliente Google',
    text: 'Ótima experiência! Atendimento nota mil e entrega impecável.',
    rating: 5
  }
];

const TestimonialCard = ({ review }: { review: typeof reviews[0], key?: any }) => (
  <div className="flex-shrink-0 w-[400px] bg-[#1a2b4b] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[300px] relative mx-3 group transition-all duration-300 hover:border-brand-primary/30 whitespace-normal">
    <div className="absolute top-8 right-8">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8 opacity-90" />
    </div>
    
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-brand-primary/20 border-2 border-brand-primary/30 flex items-center justify-center text-brand-primary font-bold text-xl uppercase">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white text-lg tracking-tight">{review.name}</h4>
          <p className="text-sm text-gray-400 font-medium">{review.company}</p>
        </div>
      </div>
      <p className="text-gray-300 text-base leading-relaxed font-medium whitespace-normal">
        {review.text}
      </p>
    </div>

    <div className="flex justify-between items-end mt-4">
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={18} fill="#ffb800" className="text-[#ffb800]" />
        ))}
      </div>
      <Quote size={32} className="text-white/10 group-hover:text-brand-primary/20 transition-colors" />
    </div>
  </div>
);

export const Testimonials = () => {
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="w-full py-28 bg-brand-secondary overflow-hidden">
      <div className="px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-[1.1] mb-2">
            O Que Nossos Clientes Estão Dizendo
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-6">
          <p className="text-gray-400 text-lg max-w-sm md:text-right leading-relaxed font-medium">
            Nosso compromisso com a qualidade e o serviço impecável transparece em cada pincelada.
          </p>
          <a 
            href="https://www.google.com/search?q=daniel+e+daiane+pinturas&ie=UTF-8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/20 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white hover:text-brand-secondary transition-all"
          >
            Explorar Mais <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="mask-fade-x space-y-8">
          {/* Row 1 */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {row1.map((review, idx) => (
              <TestimonialCard key={`row1-${idx}`} review={review} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {row2.map((review, idx) => (
              <TestimonialCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <a 
          href="https://www.google.com/search?q=daniel+e+daiane+pinturas&ie=UTF-8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-brand-primary hover:border-brand-primary transition-all backdrop-blur-sm shadow-xl"
        >
          Ver Mais Depoimentos <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};
