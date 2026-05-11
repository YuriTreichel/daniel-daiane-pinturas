import { useState, useRef } from 'react';
import { ArrowUpRight, Play, Pause, CheckCircle2 } from 'lucide-react';
import { motion } from "motion/react";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const values = [
    { title: "Tradição Familiar", desc: "Mais de 60 anos de experiência passada de geração em geração." },
    { title: "Ferramentas Profissionais", desc: "Utilizamos as melhores ferramentas e equipamentos do mercado." },
    { title: "Atendimento Personalizado", desc: "Tratamos seu projeto com o cuidado de quem é dono." },
    { title: "Limpeza e Organização", desc: "Sua casa impecável durante e após a execução." }
  ];

  return (
    <section id="sobre" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full md:sticky md:top-32 mb-12 md:mb-0"
        >
          <div className="relative rounded-3xl overflow-hidden max-w-sm mx-auto shadow-2xl bg-gray-100 group cursor-pointer" onClick={togglePlay}>
            <video 
              ref={videoRef}
              src="/assets/videos/about_video.mp4" 
              playsInline 
              className="w-full h-auto block"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-black/0 opacity-0 group-hover:bg-black/20 group-hover:opacity-100' : 'bg-black/30 opacity-100'}`}>
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:scale-110">
                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 lg:pl-8"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6">
            Nossa História
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-8 leading-tight">
            Uma tradição familiar que atravessa gerações há mais de 60 anos.
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              A <strong>Daniel & Daiane Pinturas</strong> não é apenas uma empresa, é a continuação de um legado. Com mais de <strong>60 anos de história</strong>, nosso conhecimento técnico e paixão pelo acabamento perfeito foram lapidados de geração em geração.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hoje, combinamos essa tradição inabalável com as tecnologias mais modernas do mercado, garantindo que cada projeto em Bento Gonçalves e região receba o máximo de excelência e cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3"
              >
                <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-brand-secondary">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a 
            href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-secondary text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-3 hover:bg-brand-primary transition-all shadow-xl hover:-translate-y-1"
          >
            Solicite seu Orçamento Grátis <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
