import { ArrowUpRight, Phone } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="w-full px-6 md:px-12 py-32 bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-10 leading-tight">
          Transforme seu lar com pinturas profissionais. Prontos para entregar resultados excepcionais para você!
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-secondary transition-all shadow-lg transform hover:scale-105">
            Solicite seu Orçamento Grátis <ArrowUpRight size={16} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-secondary hover:text-white transition-all shadow-md">
            <Phone size={16} /> (54) 99980-2228
          </a>
        </div>
      </div>

      {/* Decorative Circular Images */}
      <img src="/assets/images/interna.jpeg" className="absolute top-16 left-24 w-16 h-16 rounded-full object-cover hidden md:block border-2 border-white shadow-xl hover:scale-110 transition-transform duration-500" />
      <img src="/assets/images/interna_2.jpeg" className="absolute bottom-16 left-32 w-24 h-24 rounded-full object-cover hidden md:block border-4 border-white shadow-xl hover:scale-110 transition-transform duration-500" />
      <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop" className="absolute top-10 right-24 w-28 h-28 rounded-full object-cover hidden md:block border-4 border-white shadow-xl hover:scale-110 transition-transform duration-500" />
      <img src="/assets/images/externa.jpeg" className="absolute bottom-10 right-32 w-20 h-20 rounded-full object-cover hidden md:block border-2 border-white shadow-xl hover:scale-110 transition-transform duration-500" />
    </section>
  );
};
