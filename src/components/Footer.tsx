import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <Logo className="items-start" showText={true} light={true} />
            </div>
            <p className="text-white/70 text-sm mb-8 leading-relaxed italic">
              Excelência em cada pincelada. Sua satisfação é nossa maior prioridade.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Daniel-e-Daiane-Pinturas/100089633496496/?locale=ms_MY#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary transition-all"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/danieledaianepinturas/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary transition-all"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@danieledaianepinturas" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Projetos Recentes</a></li>
              <li><a href="#documentario" className="hover:text-white transition-colors">Documentário</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <a href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(54) 99980-2228</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <a href="mailto:contato@danieledaianepinturas.com.br" className="hover:text-white transition-colors">contato@danieledaianepinturas.com.br</a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>Caminhos de Pedra, Bento Gonçalves - RS, 95714-000</span>
              </li>
            </ul>
          </div>

          {/* Trust Statements */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative inline-block">
              Nossa Garantia
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                Equipe Especializada
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                Equipamentos Profissionais
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                Orçamentos sem Compromisso
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Daniel & Daiane Pinturas e Restaurações. Todos os direitos reservados.</p>
          <div className="flex items-center gap-8">
            <a 
              href="https://sigasites.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Desenvolvido por Siga Sites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
