import { useState, FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Escolha um serviço'
  });

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Me chamo *${formData.name}*.\n\nEstou entrando em contato através do site para solicitar um orçamento de *${formData.service}*.\n\nMeu e-mail: ${formData.email}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=5554999802228&text=${encodedMessage}`, '_blank');
  };

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
          
          {/* Form */}
          <motion.form 
            onSubmit={handleWhatsApp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" 
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  required
                  type="email" 
                  placeholder="seu@email.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Serviço</label>
                <select 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary text-gray-500"
                >
                  <option disabled>Escolha um serviço</option>
                  <option>Pintura de Casas (Interna/Externa)</option>
                  <option>Pintura de Prédios</option>
                  <option>Restaurações de Pinturas</option>
                  <option>Pintura de Telhados/Grades</option>
                </select>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-brand-secondary text-white px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-all shadow-md"
            >
              Solicitar Orçamento Grátis <ArrowUpRight size={16} />
            </button>
          </motion.form>

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
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-white font-bold text-xl leading-tight">Fachadas<br />impecáveis</div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-48 group flex items-center justify-center text-center p-6">
            <img src="/assets/images/matt-pictures-jsotO6-hBsM-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-white font-bold text-xl leading-tight">Restauração<br />de pinturas</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
