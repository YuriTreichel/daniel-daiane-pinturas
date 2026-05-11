import { ArrowUpRight, Phone } from 'lucide-react';

export const Banner = () => {
  return (
    <section className="w-full px-6 md:px-12 py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-10 leading-tight">
          Transforme seu lar com especialistas em pintura e restauração. Empresa Familiar comprometida com a sua satisfação.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#sobre" className="bg-brand-secondary text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-primary transition-all shadow-md">
            Sobre Daniel & Daiane <ArrowUpRight size={16} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-200 bg-white text-brand-secondary px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm">
            <Phone size={16} /> (54) 99980-2228
          </a>
        </div>
      </div>

      {/* Decorative Circular Images */}
      <img src="/assets/images/interna.jpeg" className="absolute top-10 left-10 w-24 h-24 rounded-full object-cover hidden md:block hover:scale-110 transition-transform duration-500 shadow-xl border-4 border-white" />
      <img src="/assets/images/interna_2.jpeg" className="absolute bottom-10 left-32 w-20 h-20 rounded-full object-cover hidden md:block hover:scale-110 transition-transform duration-500 shadow-xl border-4 border-white" />
      <img src="/assets/images/externa.jpeg" className="absolute top-20 right-20 w-16 h-16 rounded-full object-cover hidden md:block hover:scale-110 transition-transform duration-500 shadow-xl border-4 border-white" />
      <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop" className="absolute bottom-12 right-32 w-32 h-32 rounded-full object-cover hidden md:block hover:scale-110 transition-transform duration-500 shadow-xl border-4 border-white" />
    </section>
  );
};
