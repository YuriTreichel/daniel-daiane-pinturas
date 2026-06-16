import React, { useState, useRef } from 'react';
import { 
  User, 
  ClipboardList, 
  Briefcase, 
  Wrench, 
  TrendingUp, 
  Smile, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Upload, 
  Video, 
  AlertCircle, 
  CheckCircle2, 
  FileText,
  ShieldAlert,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Form Data Interface
interface FormData {
  // Etapa 1: Dados Obrigatórios
  nome: string;
  cpf: string;
  dataNascimento: string;
  idade: string;
  telefone: string;
  cidade: string;
  bairro: string;
  email: string;
  socialMedia: string;

  // Etapa 2: Informações Pessoais
  possuiCnh: string; // 'Sim' | 'Não'
  cnhCategoria: string[]; // 'A', 'B', etc.
  veiculoProprio: string; // 'Carro' | 'Moto' | 'Não possuo'
  fuma: string; // 'Sim' | 'Não'
  disponibilidadeViajar: string; // 'Sim' | 'Não'
  disponibilidadeSabados: string; // 'Sim' | 'Não'
  limitacaoFisica: string; // 'Sim' | 'Não'
  limitacaoFisicaQual: string;

  // Etapa 3: Experiência Profissional
  anosConstrucaoCivil: string;
  anosPintura: string;
  funcaoPrincipal: string; // 'Pintor' | 'Auxiliar de pintor' | 'Líder de equipe' | 'Supervisor' | 'Outro'
  empresasRamo: string;
  ultimaEmpresa: string;
  tempoUltimaEmpresa: string;
  motivoSaida: string;
  estaEmpregado: string; // 'Sim' | 'Não'
  pretensaoSalarial: string;

  // Etapa 4: Experiência Técnica
  servicosExecutar: string[]; // list of services

  // Etapa 5: Trabalho em Altura
  experienciaAltura: string; // 'Sim' | 'Não'
  experienciaEquipamentos: string[]; // Cadeira suspensa, etc.
  certificadoNr35: string; // 'Sim' | 'Não'
  acidenteAltura: string; // 'Sim' | 'Não'
  acidenteAlturaExplique: string;
  nivelSegurancaAltura: number; // 1-10

  // Etapa 6: Perfil Comportamental
  importanteEmpresa: string;
  motivoDemissao: string;
  preferenciaTrabalho: string; // 'Trabalhar sozinho' | 'Trabalhar em equipe'
  reacaoCorrecaoLider: string;
  maiorAprendizado: string;
  oQuePodeAgregar: string;

  // Etapa 7: Filtro Final
  porqueTrabalharDaniel: string;
  quandoComecar: string;
  possuiIndicacao: string; // 'Sim' | 'Não'
  indicacaoQuem: string;
  videoApresentacao: File | null;
  situacaoDificilObra: string;
}

const initialFormData: FormData = {
  nome: '',
  cpf: '',
  dataNascimento: '',
  idade: '',
  telefone: '',
  cidade: '',
  bairro: '',
  email: '',
  socialMedia: '',
  possuiCnh: '',
  cnhCategoria: [],
  veiculoProprio: '',
  fuma: '',
  disponibilidadeViajar: '',
  disponibilidadeSabados: '',
  limitacaoFisica: '',
  limitacaoFisicaQual: '',
  anosConstrucaoCivil: '',
  anosPintura: '',
  funcaoPrincipal: '',
  empresasRamo: '',
  ultimaEmpresa: '',
  tempoUltimaEmpresa: '',
  motivoSaida: '',
  estaEmpregado: '',
  pretensaoSalarial: '',
  servicosExecutar: [],
  experienciaAltura: '',
  experienciaEquipamentos: [],
  certificadoNr35: '',
  acidenteAltura: '',
  acidenteAlturaExplique: '',
  nivelSegurancaAltura: 5,
  importanteEmpresa: '',
  motivoDemissao: '',
  preferenciaTrabalho: '',
  reacaoCorrecaoLider: '',
  maiorAprendizado: '',
  oQuePodeAgregar: '',
  porqueTrabalharDaniel: '',
  quandoComecar: '',
  possuiIndicacao: '',
  indicacaoQuem: '',
  videoApresentacao: null,
  situacaoDificilObra: ''
};

interface TrabalheConoscoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrabalheConosco = ({ isOpen, onClose }: TrabalheConoscoProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [videoName, setVideoName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Masks
  const formatCPF = (value: string) => {
    const numeric = value.replace(/\D/g, '');
    return numeric
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);
  };

  const formatPhone = (value: string) => {
    const numeric = value.replace(/\D/g, '');
    if (numeric.length <= 10) {
      return numeric
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .substring(0, 14);
    }
    return numeric
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  };

  const formatBirthDate = (value: string) => {
    const numeric = value.replace(/\D/g, '');
    return numeric
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substring(0, 10);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') formattedValue = formatCPF(value);
    if (name === 'telefone') formattedValue = formatPhone(value);
    if (name === 'dataNascimento') formattedValue = formatBirthDate(value);

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Clear error
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCheckboxChange = (name: 'servicosExecutar' | 'experienciaEquipamentos' | 'cnhCategoria', item: string) => {
    setFormData(prev => {
      const currentList = prev[name] as string[];
      const newList = currentList.includes(item)
        ? currentList.filter(i => i !== item)
        : [...currentList, item];
      return {
        ...prev,
        [name]: newList
      };
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Limit file size to 100MB as a safety check
      if (file.size > 100 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          videoApresentacao: 'O arquivo de vídeo deve ter menos de 100MB.'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        videoApresentacao: file
      }));
      setVideoName(file.name);
      setErrors(prev => ({
        ...prev,
        videoApresentacao: undefined
      }));
    }
  };

  // Basic CPF validation helper
  const isValidCPF = (cpf: string) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) return false;
    // Check for repetitive digits (e.g. 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
    
    // Validate digits
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false;
    
    return true;
  };

  const validateStep = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = 'Nome completo é obrigatório.';
      if (!formData.cpf.trim()) {
        newErrors.cpf = 'CPF é obrigatório.';
      } else if (!isValidCPF(formData.cpf)) {
        newErrors.cpf = 'CPF inválido.';
      }
      if (!formData.dataNascimento.trim()) newErrors.dataNascimento = 'Data de nascimento é obrigatória.';
      if (!formData.idade.trim()) newErrors.idade = 'Idade é obrigatória.';
      if (!formData.telefone.trim()) newErrors.telefone = 'Telefone/WhatsApp é obrigatório.';
      if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória.';
      if (!formData.bairro.trim()) newErrors.bairro = 'Bairro é obrigatório.';
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'E-mail inválido.';
      }
    }

    if (step === 2) {
      if (!formData.possuiCnh) newErrors.possuiCnh = 'Por favor, selecione uma opção.';
      if (formData.possuiCnh === 'Sim' && formData.cnhCategoria.length === 0) {
        newErrors.cnhCategoria = 'Selecione pelo menos uma categoria de habilitação.';
      }
      if (!formData.veiculoProprio) newErrors.veiculoProprio = 'Por favor, selecione uma opção.';
      if (!formData.fuma) newErrors.fuma = 'Por favor, selecione uma opção.';
      if (!formData.disponibilidadeViajar) newErrors.disponibilidadeViajar = 'Por favor, selecione uma opção.';
      if (!formData.disponibilidadeSabados) newErrors.disponibilidadeSabados = 'Por favor, selecione uma opção.';
      if (!formData.limitacaoFisica) newErrors.limitacaoFisica = 'Por favor, selecione uma opção.';
      if (formData.limitacaoFisica === 'Sim' && !formData.limitacaoFisicaQual.trim()) {
        newErrors.limitacaoFisicaQual = 'Por favor, descreva sua limitação.';
      }
    }

    if (step === 3) {
      if (!formData.anosConstrucaoCivil.trim()) newErrors.anosConstrucaoCivil = 'Informe a quantidade de anos.';
      if (!formData.anosPintura.trim()) newErrors.anosPintura = 'Informe a quantidade de anos.';
      if (!formData.funcaoPrincipal) newErrors.funcaoPrincipal = 'Selecione sua função principal.';
      if (!formData.ultimaEmpresa.trim()) newErrors.ultimaEmpresa = 'Informe a última empresa.';
      if (!formData.tempoUltimaEmpresa.trim()) newErrors.tempoUltimaEmpresa = 'Informe o tempo de permanência.';
      if (!formData.motivoSaida.trim()) newErrors.motivoSaida = 'Informe o motivo da saída.';
      if (!formData.estaEmpregado) newErrors.estaEmpregado = 'Selecione se está empregado atualmente.';
      if (!formData.pretensaoSalarial.trim()) newErrors.pretensaoSalarial = 'Informe sua pretensão salarial.';
    }

    if (step === 4) {
      if (formData.servicosExecutar.length === 0) {
        newErrors.servicosExecutar = 'Selecione pelo menos um serviço que sabe executar.';
      }
    }

    if (step === 5) {
      if (!formData.experienciaAltura) newErrors.experienciaAltura = 'Selecione se possui experiência em altura.';
      if (formData.experienciaAltura === 'Sim' && formData.experienciaEquipamentos.length === 0) {
        newErrors.experienciaEquipamentos = 'Selecione os equipamentos com os quais tem experiência.';
      }
      if (!formData.certificadoNr35) newErrors.certificadoNr35 = 'Selecione se possui certificado NR-35.';
      if (!formData.acidenteAltura) newErrors.acidenteAltura = 'Responda esta pergunta.';
      if (formData.acidenteAltura === 'Sim' && !formData.acidenteAlturaExplique.trim()) {
        newErrors.acidenteAlturaExplique = 'Por favor, explique o acidente.';
      }
    }

    if (step === 6) {
      if (!formData.importanteEmpresa.trim()) newErrors.importanteEmpresa = 'Este campo é obrigatório.';
      if (!formData.motivoDemissao.trim()) newErrors.motivoDemissao = 'Este campo é obrigatório.';
      if (!formData.preferenciaTrabalho) newErrors.preferenciaTrabalho = 'Este campo é obrigatório.';
      if (!formData.reacaoCorrecaoLider.trim()) newErrors.reacaoCorrecaoLider = 'Este campo é obrigatório.';
      if (!formData.maiorAprendizado.trim()) newErrors.maiorAprendizado = 'Este campo é obrigatório.';
      if (!formData.oQuePodeAgregar.trim()) newErrors.oQuePodeAgregar = 'Este campo é obrigatório.';
    }

    if (step === 7) {
      if (!formData.porqueTrabalharDaniel.trim()) newErrors.porqueTrabalharDaniel = 'Este campo é obrigatório.';
      if (!formData.quandoComecar.trim()) newErrors.quandoComecar = 'Este campo é obrigatório.';
      if (!formData.possuiIndicacao) newErrors.possuiIndicacao = 'Este campo é obrigatório.';
      if (formData.possuiIndicacao === 'Sim' && !formData.indicacaoQuem.trim()) {
        newErrors.indicacaoQuem = 'Informe o nome de quem o indicou.';
      }
      if (!formData.videoApresentacao) newErrors.videoApresentacao = 'O envio do vídeo de apresentação é obrigatório.';
      if (!formData.situacaoDificilObra.trim()) newErrors.situacaoDificilObra = 'Este campo é obrigatório.';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      isValid = false;
      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
      scrollToTop();
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    scrollToTop();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      
      // Append standard text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'cnhCategoria' && key !== 'servicosExecutar' && key !== 'experienciaEquipamentos' && key !== 'videoApresentacao') {
          data.append(key, String(value));
        }
      });

      // Append arrays as JSON strings
      data.append('cnhCategoria', JSON.stringify(formData.cnhCategoria));
      data.append('servicosExecutar', JSON.stringify(formData.servicosExecutar));
      data.append('experienciaEquipamentos', JSON.stringify(formData.experienciaEquipamentos));

      // Append file
      if (formData.videoApresentacao) {
        data.append('videoApresentacao', formData.videoApresentacao);
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Erro ao enviar candidatura.');
      }

      setIsSubmitted(true);
      scrollToTop();
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || 'Falha ao enviar o currículo. Verifique sua conexão e tente novamente.');
      scrollToTop();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step Meta Configuration
  const stepsMeta = [
    { title: 'Dados Básicos', icon: <User size={20} /> },
    { title: 'Pessoais', icon: <ClipboardList size={20} /> },
    { title: 'Profissional', icon: <Briefcase size={20} /> },
    { title: 'Técnico', icon: <Wrench size={20} /> },
    { title: 'Altura', icon: <TrendingUp size={20} /> },
    { title: 'Comportamental', icon: <Smile size={20} /> },
    { title: 'Final', icon: <Check size={20} /> }
  ];

  const servicesList = [
    'Pintura predial externa',
    'Pintura predial interna',
    'Pintura residencial',
    'Pintura industrial',
    'Lavagem de fachada',
    'Tratamento de fissuras',
    'Impermeabilização',
    'Textura',
    'Massa corrida',
    'Massa acrílica',
    'Aplicação com rolo',
    'Aplicação com pistola (airless)',
    'Pintura em estruturas metálicas',
    'Pintura de telhados',
    'Pintura de garagens',
    'Pintura de demarcação',
    'Outro'
  ];

  const heightEquipments = [
    'Cadeira suspensa',
    'Balancim',
    'Andaime fachadeiro',
    'Plataforma elevatória',
    'Escada extensiva'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          ref={scrollContainerRef}
          className="fixed inset-0 z-[100] overflow-y-auto flex items-start justify-center p-4 md:p-10"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-gray-100 relative z-10 flex flex-col my-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-brand-primary p-2.5 rounded-full transition-all z-20 cursor-pointer"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
        
        {/* Success Screen */}
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 text-center"
          >
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary mb-4">
              Currículo Recebido com Sucesso!
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Obrigado pelo seu interesse em fazer parte da equipe da <strong>Daniel & Daiane Pinturas</strong>. Seus dados foram cadastrados em nosso banco de talentos e entraremos em contato caso seu perfil seja selecionado para as próximas etapas.
            </p>
            <a 
              href="#" 
              onClick={() => {
                setIsSubmitted(false);
                setFormData(initialFormData);
                setStep(1);
              }}
              className="bg-brand-primary text-white font-bold px-8 py-3.5 rounded-full inline-block hover:bg-brand-secondary transition-all shadow-lg hover:-translate-y-0.5"
            >
              Voltar ao Início
            </a>
          </motion.div>
        ) : (
          <div className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Header Area */}
            <div className="bg-brand-secondary text-white p-8 md:p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent pointer-events-none" />
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
                Faça Parte da História da Daniel & Daiane Pinturas
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed relative z-10">
                Preencha o formulário abaixo para participar dos nossos processos seletivos. Buscamos profissionais comprometidos, responsáveis e que desejam crescer junto com uma empresa que há mais de 60 anos transforma e valoriza patrimônios.
              </p>
            </div>

            {/* Progress Tracker Banner */}
            <div className="border-b border-gray-100 p-6 bg-gray-50/50">
              {/* Progress Line & Nodes */}
              <div className="relative flex justify-between items-center max-w-3xl mx-auto">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0" />
                <div 
                  className="absolute left-0 top-1/2 h-1 bg-brand-primary -translate-y-1/2 z-0 transition-all duration-500" 
                  style={{ width: `${((step - 1) / (stepsMeta.length - 1)) * 100}%` }}
                />
                
                {stepsMeta.map((s, index) => {
                  const stepNum = index + 1;
                  const isActive = stepNum === step;
                  const isCompleted = stepNum < step;
                  
                  return (
                    <div key={index} className="flex flex-col items-center z-10">
                      <button
                        type="button"
                        onClick={() => {
                          // Allow navigation back to completed steps
                          if (isCompleted || stepNum < step) {
                            setStep(stepNum);
                          }
                        }}
                        disabled={stepNum > step}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-brand-primary text-white ring-4 ring-brand-primary/20 scale-110' 
                            : isCompleted 
                              ? 'bg-brand-secondary text-white' 
                              : 'bg-white text-gray-400 border-2 border-gray-200'
                        }`}
                      >
                        {isCompleted ? <Check size={16} /> : stepNum}
                      </button>
                      <span className={`text-[10px] md:text-xs mt-2 font-medium hidden sm:inline ${
                        isActive ? 'text-brand-primary font-bold' : 'text-gray-500'
                      }`}>
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Fields Area */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12 relative">
              {isSubmitting && (
                <div className="absolute inset-0 bg-white/80 z-50 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-brand-secondary font-bold text-lg">Enviando seu currículo...</p>
                  <p className="text-gray-500 text-sm mt-1">Por favor, aguarde. Enviando dados e vídeo de apresentação.</p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-700">
                  <AlertCircle className="shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Erro ao enviar candidatura</h4>
                    <p className="text-xs mt-1">{submitError}</p>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* STEP 1: DADOS OBRIGATÓRIOS */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <User className="text-brand-primary" /> ETAPA 1 – DADOS OBRIGATÓRIOS
                        </h3>
                        <p className="text-sm text-gray-500">Todos os campos desta etapa são obrigatórios</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Nome Completo</label>
                          <input 
                            type="text" 
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.nome ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="Insira seu nome completo"
                          />
                          {errors.nome && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.nome}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">CPF</label>
                          <input 
                            type="text" 
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.cpf ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="000.000.000-00"
                          />
                          {errors.cpf && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.cpf}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Data de Nascimento</label>
                          <input 
                            type="text" 
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.dataNascimento ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="DD/MM/AAAA"
                          />
                          {errors.dataNascimento && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.dataNascimento}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Idade</label>
                          <input 
                            type="number" 
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.idade ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="Sua idade"
                            min="18"
                            max="99"
                          />
                          {errors.idade && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.idade}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Telefone / WhatsApp</label>
                          <input 
                            type="text" 
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.telefone ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="(54) 99999-9999"
                          />
                          {errors.telefone && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.telefone}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">E-mail</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="seu.email@exemplo.com"
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Cidade onde mora</label>
                          <input 
                            type="text" 
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.cidade ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="Ex: Bento Gonçalves"
                          />
                          {errors.cidade && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.cidade}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Bairro</label>
                          <input 
                            type="text" 
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.bairro ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                            placeholder="Ex: Centro"
                          />
                          {errors.bairro && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.bairro}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-secondary mb-2">Instagram / Facebook (se possuir)</label>
                        <input 
                          type="text" 
                          name="socialMedia"
                          value={formData.socialMedia}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                          placeholder="Ex: @seu_usuario ou link do perfil"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: INFORMAÇÕES PESSOAIS */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <ClipboardList className="text-brand-primary" /> ETAPA 2 – INFORMAÇÕES PESSOAIS
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Habilitação CNH */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Você possui carteira de habilitação?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="possuiCnh" 
                                  value={opt}
                                  checked={formData.possuiCnh === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.possuiCnh && <p className="text-xs text-red-500 mt-1.5">{errors.possuiCnh}</p>}
                        </div>

                        {/* Categoria CNH (Condicional) */}
                        {formData.possuiCnh === 'Sim' && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-1"
                          >
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Qual categoria?</label>
                            <div className="flex flex-wrap gap-3">
                              {['A', 'B', 'C', 'D', 'E'].map(cat => (
                                <button
                                  type="button"
                                  key={cat}
                                  onClick={() => handleCheckboxChange('cnhCategoria', cat)}
                                  className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                                    formData.cnhCategoria.includes(cat)
                                      ? 'bg-brand-primary text-white border-brand-primary'
                                      : 'border-gray-200 hover:bg-gray-50'
                                  }`}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                            {errors.cnhCategoria && <p className="text-xs text-red-500 mt-1.5">{errors.cnhCategoria}</p>}
                          </motion.div>
                        )}

                        {/* Veículo próprio */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Você possui veículo próprio?</label>
                          <div className="flex flex-col sm:flex-row gap-3">
                            {['Carro', 'Moto', 'Não possuo'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all text-sm font-semibold">
                                <input 
                                  type="radio" 
                                  name="veiculoProprio" 
                                  value={opt}
                                  checked={formData.veiculoProprio === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.veiculoProprio && <p className="text-xs text-red-500 mt-1.5">{errors.veiculoProprio}</p>}
                        </div>

                        {/* Fuma */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Você fuma?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="fuma" 
                                  value={opt}
                                  checked={formData.fuma === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.fuma && <p className="text-xs text-red-500 mt-1.5">{errors.fuma}</p>}
                        </div>

                        {/* Disponibilidade para viajar */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Possui disponibilidade para viajar?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="disponibilidadeViajar" 
                                  value={opt}
                                  checked={formData.disponibilidadeViajar === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.disponibilidadeViajar && <p className="text-xs text-red-500 mt-1.5">{errors.disponibilidadeViajar}</p>}
                        </div>

                        {/* Disponibilidade sábados */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Possui disponibilidade para trabalhar aos sábados?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="disponibilidadeSabados" 
                                  value={opt}
                                  checked={formData.disponibilidadeSabados === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.disponibilidadeSabados && <p className="text-xs text-red-500 mt-1.5">{errors.disponibilidadeSabados}</p>}
                        </div>

                        {/* Limitação física */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Tem alguma limitação física para atividades em altura, escadas ou andaimes?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="limitacaoFisica" 
                                  value={opt}
                                  checked={formData.limitacaoFisica === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary focus:ring-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.limitacaoFisica && <p className="text-xs text-red-500 mt-1.5">{errors.limitacaoFisica}</p>}
                        </div>

                        {/* Qual limitação (Condicional) */}
                        {formData.limitacaoFisica === 'Sim' && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-1 md:col-span-2"
                          >
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Se sim, qual?</label>
                            <input 
                              type="text" 
                              name="limitacaoFisicaQual"
                              value={formData.limitacaoFisicaQual}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                              placeholder="Descreva a limitação física"
                            />
                            {errors.limitacaoFisicaQual && <p className="text-xs text-red-500 mt-1.5">{errors.limitacaoFisicaQual}</p>}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: EXPERIÊNCIA PROFISSIONAL */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <Briefcase className="text-brand-primary" /> ETAPA 3 – EXPERIÊNCIA PROFISSIONAL
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Há quantos anos trabalha na construção civil?</label>
                          <input 
                            type="text" 
                            name="anosConstrucaoCivil"
                            value={formData.anosConstrucaoCivil}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Ex: 5 anos"
                          />
                          {errors.anosConstrucaoCivil && <p className="text-xs text-red-500 mt-1.5">{errors.anosConstrucaoCivil}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Há quantos anos trabalha com pintura?</label>
                          <input 
                            type="text" 
                            name="anosPintura"
                            value={formData.anosPintura}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Ex: 3 anos"
                          />
                          {errors.anosPintura && <p className="text-xs text-red-500 mt-1.5">{errors.anosPintura}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Qual sua principal função hoje?</label>
                          <select 
                            name="funcaoPrincipal"
                            value={formData.funcaoPrincipal}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-white"
                          >
                            <option value="">Selecione sua função...</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Auxiliar de pintor">Auxiliar de pintor</option>
                            <option value="Líder de equipe">Líder de equipe</option>
                            <option value="Supervisor">Supervisor</option>
                            <option value="Outro">Outro</option>
                          </select>
                          {errors.funcaoPrincipal && <p className="text-xs text-red-500 mt-1.5">{errors.funcaoPrincipal}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Pretensão Salarial</label>
                          <input 
                            type="text" 
                            name="pretensaoSalarial"
                            value={formData.pretensaoSalarial}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="R$ 3.000,00"
                          />
                          {errors.pretensaoSalarial && <p className="text-xs text-red-500 mt-1.5">{errors.pretensaoSalarial}</p>}
                        </div>

                        <div className="col-span-1 md:col-span-2">
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Em quais empresas do ramo você já trabalhou?</label>
                          <textarea 
                            name="empresasRamo"
                            value={formData.empresasRamo}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                            placeholder="Liste as principais empresas onde trabalhou"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Qual foi a última empresa onde trabalhou?</label>
                          <input 
                            type="text" 
                            name="ultimaEmpresa"
                            value={formData.ultimaEmpresa}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Nome da empresa"
                          />
                          {errors.ultimaEmpresa && <p className="text-xs text-red-500 mt-1.5">{errors.ultimaEmpresa}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Quanto tempo permaneceu nela?</label>
                          <input 
                            type="text" 
                            name="tempoUltimaEmpresa"
                            value={formData.tempoUltimaEmpresa}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Ex: 1 ano e 6 meses"
                          />
                          {errors.tempoUltimaEmpresa && <p className="text-xs text-red-500 mt-1.5">{errors.tempoUltimaEmpresa}</p>}
                        </div>

                        <div className="col-span-1 md:col-span-2">
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Por que saiu da última empresa?</label>
                          <textarea 
                            name="motivoSaida"
                            value={formData.motivoSaida}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Fale brevemente sobre o motivo da sua saída"
                          />
                          {errors.motivoSaida && <p className="text-xs text-red-500 mt-1.5">{errors.motivoSaida}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Atualmente está empregado?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="estaEmpregado" 
                                  value={opt}
                                  checked={formData.estaEmpregado === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.estaEmpregado && <p className="text-xs text-red-500 mt-1.5">{errors.estaEmpregado}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: EXPERIÊNCIA TÉCNICA */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <Wrench className="text-brand-primary" /> ETAPA 4 – EXPERIÊNCIA TÉCNICA
                        </h3>
                        <p className="text-sm text-gray-500">Marque todos os serviços que você sabe executar com segurança e qualidade</p>
                      </div>

                      <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {servicesList.map((service, index) => (
                            <label 
                              key={index} 
                              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer hover:bg-gray-50 transition-all ${
                                formData.servicosExecutar.includes(service)
                                  ? 'bg-brand-primary/5 border-brand-primary/30 text-brand-secondary'
                                  : 'border-gray-200'
                              }`}
                            >
                              <input 
                                type="checkbox"
                                checked={formData.servicosExecutar.includes(service)}
                                onChange={() => handleCheckboxChange('servicosExecutar', service)}
                                className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
                              />
                              <span className="text-sm font-medium">{service}</span>
                            </label>
                          ))}
                        </div>
                        {errors.servicosExecutar && (
                          <p className="text-xs text-red-500 mt-4 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.servicosExecutar}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 5: TRABALHO EM ALTURA */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <TrendingUp className="text-brand-primary" /> ETAPA 5 – TRABALHO EM ALTURA
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Experiência com altura */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Tem experiência com trabalho em altura?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="experienciaAltura" 
                                  value={opt}
                                  checked={formData.experienciaAltura === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.experienciaAltura && <p className="text-xs text-red-500 mt-1.5">{errors.experienciaAltura}</p>}
                        </div>

                        {/* Certificado NR-35 */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Possui certificado NR-35?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="certificadoNr35" 
                                  value={opt}
                                  checked={formData.certificadoNr35 === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.certificadoNr35 && <p className="text-xs text-red-500 mt-1.5">{errors.certificadoNr35}</p>}
                        </div>

                        {/* Equipamentos em altura (Condicional) */}
                        {formData.experienciaAltura === 'Sim' && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-1 md:col-span-2"
                          >
                            <label className="block text-sm font-semibold text-brand-secondary mb-3">Tem experiência com:</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {heightEquipments.map((eq, index) => (
                                <label 
                                  key={index}
                                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer hover:bg-gray-50 transition-all ${
                                    formData.experienciaEquipamentos.includes(eq)
                                      ? 'bg-brand-primary/5 border-brand-primary/30 text-brand-secondary'
                                      : 'border-gray-200'
                                  }`}
                                >
                                  <input 
                                    type="checkbox"
                                    checked={formData.experienciaEquipamentos.includes(eq)}
                                    onChange={() => handleCheckboxChange('experienciaEquipamentos', eq)}
                                    className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
                                  />
                                  <span className="text-sm font-medium">{eq}</span>
                                </label>
                              ))}
                            </div>
                            {errors.experienciaEquipamentos && <p className="text-xs text-red-500 mt-2">{errors.experienciaEquipamentos}</p>}
                          </motion.div>
                        )}

                        {/* Acidente em altura */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Já sofreu algum acidente de trabalho em altura?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="acidenteAltura" 
                                  value={opt}
                                  checked={formData.acidenteAltura === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.acidenteAltura && <p className="text-xs text-red-500 mt-1.5">{errors.acidenteAltura}</p>}
                        </div>

                        {/* Escala de Confiança */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">
                            Qual seu nível de segurança/confiança para trabalho em altura? (1 a 10)
                          </label>
                          <div className="space-y-3">
                            <input 
                              type="range" 
                              name="nivelSegurancaAltura"
                              min="1" 
                              max="10" 
                              value={formData.nivelSegurancaAltura}
                              onChange={(e) => setFormData(prev => ({ ...prev, nivelSegurancaAltura: parseInt(e.target.value) }))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                            />
                            <div className="flex justify-between text-xs text-gray-500 font-bold px-1">
                              <span>1 (Pouco Confiante)</span>
                              <span className="text-brand-primary text-sm font-extrabold">{formData.nivelSegurancaAltura} / 10</span>
                              <span>10 (Totalmente Seguro)</span>
                            </div>
                          </div>
                        </div>

                        {/* Explicação acidente (Condicional) */}
                        {formData.acidenteAltura === 'Sim' && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-1 md:col-span-2"
                          >
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Se sim, explique:</label>
                            <textarea 
                              name="acidenteAlturaExplique"
                              value={formData.acidenteAlturaExplique}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Conte brevemente sobre o ocorrido e como está hoje"
                            />
                            {errors.acidenteAlturaExplique && <p className="text-xs text-red-500 mt-1.5">{errors.acidenteAlturaExplique}</p>}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 6: PERFIL COMPORTAMENTAL */}
                  {step === 6 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <Smile className="text-brand-primary" /> ETAPA 6 – PERFIL COMPORTAMENTAL
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">O que é mais importante para você em uma empresa?</label>
                            <textarea 
                              name="importanteEmpresa"
                              value={formData.importanteEmpresa}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Respeito, salário em dia, crescimento..."
                            />
                            {errors.importanteEmpresa && <p className="text-xs text-red-500 mt-1.5">{errors.importanteEmpresa}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">O que faz você pedir demissão de uma empresa?</label>
                            <textarea 
                              name="motivoDemissao"
                              value={formData.motivoDemissao}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Falta de organização, mentiras, desvalorização..."
                            />
                            {errors.motivoDemissao && <p className="text-xs text-red-500 mt-1.5">{errors.motivoDemissao}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Você prefere:</label>
                            <div className="flex flex-col sm:flex-row gap-3">
                              {['Trabalhar sozinho', 'Trabalhar em equipe'].map(opt => (
                                <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-4 cursor-pointer hover:bg-gray-50 transition-all font-semibold text-sm">
                                  <input 
                                    type="radio" 
                                    name="preferenciaTrabalho" 
                                    value={opt}
                                    checked={formData.preferenciaTrabalho === opt}
                                    onChange={handleChange}
                                    className="mr-2 text-brand-primary" 
                                  />
                                  {opt}
                                </label>
                              ))}
                            </div>
                            {errors.preferenciaTrabalho && <p className="text-xs text-red-500 mt-1.5">{errors.preferenciaTrabalho}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Como você reage quando recebe uma correção de um líder?</label>
                            <textarea 
                              name="reacaoCorrecaoLider"
                              value={formData.reacaoCorrecaoLider}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Explique como lida com críticas construtivas e feedbacks..."
                            />
                            {errors.reacaoCorrecaoLider && <p className="text-xs text-red-500 mt-1.5">{errors.reacaoCorrecaoLider}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Qual foi seu maior aprendizado profissional até hoje?</label>
                            <textarea 
                              name="maiorAprendizado"
                              value={formData.maiorAprendizado}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Conte uma história ou técnica que aprendeu e te marcou..."
                            />
                            {errors.maiorAprendizado && <p className="text-xs text-red-500 mt-1.5">{errors.maiorAprendizado}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">O que você acredita que pode agregar para a nossa equipe?</label>
                            <textarea 
                              name="oQuePodeAgregar"
                              value={formData.oQuePodeAgregar}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Suas qualidades, facilidade em equipe, rapidez..."
                            />
                            {errors.oQuePodeAgregar && <p className="text-xs text-red-500 mt-1.5">{errors.oQuePodeAgregar}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 7: FILTRO FINAL */}
                  {step === 7 && (
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                          <Check className="text-brand-primary" /> ETAPA 7 – FILTRO FINAL
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Por que você deseja trabalhar na Daniel & Daniel Pinturas?</label>
                          <textarea 
                            name="porqueTrabalharDaniel"
                            value={formData.porqueTrabalharDaniel}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Conte sua motivação..."
                          />
                          {errors.porqueTrabalharDaniel && <p className="text-xs text-red-500 mt-1.5">{errors.porqueTrabalharDaniel}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Conte uma situação difícil que você enfrentou em uma obra e como resolveu.</label>
                          <textarea 
                            name="situacaoDificilObra"
                            value={formData.situacaoDificilObra}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Descreva a situação e sua atitude de resolução..."
                          />
                          {errors.situacaoDificilObra && <p className="text-xs text-red-500 mt-1.5">{errors.situacaoDificilObra}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Quando poderia começar?</label>
                          <input 
                            type="text" 
                            name="quandoComecar"
                            value={formData.quandoComecar}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                            placeholder="Ex: Imediatamente, em 15 dias..."
                          />
                          {errors.quandoComecar && <p className="text-xs text-red-500 mt-1.5">{errors.quandoComecar}</p>}
                        </div>

                        {/* Indicação */}
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-2">Você possui indicação de algum colaborador da empresa?</label>
                          <div className="flex gap-4">
                            {['Sim', 'Não'].map(opt => (
                              <label key={opt} className="flex-1 flex items-center justify-center border rounded-xl py-3 cursor-pointer hover:bg-gray-50 transition-all">
                                <input 
                                  type="radio" 
                                  name="possuiIndicacao" 
                                  value={opt}
                                  checked={formData.possuiIndicacao === opt}
                                  onChange={handleChange}
                                  className="mr-2 text-brand-primary" 
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                          {errors.possuiIndicacao && <p className="text-xs text-red-500 mt-1.5">{errors.possuiIndicacao}</p>}
                        </div>

                        {/* Quem indicou (Condicional) */}
                        {formData.possuiIndicacao === 'Sim' && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="col-span-1 md:col-span-2"
                          >
                            <label className="block text-sm font-semibold text-brand-secondary mb-2">Quem o indicou?</label>
                            <input 
                              type="text" 
                              name="indicacaoQuem"
                              value={formData.indicacaoQuem}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none"
                              placeholder="Nome do colaborador"
                            />
                            {errors.indicacaoQuem && <p className="text-xs text-red-500 mt-1.5">{errors.indicacaoQuem}</p>}
                          </motion.div>
                        )}
                      </div>

                      {/* Video Upload Field */}
                      <div className="border border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50 text-center relative hover:bg-gray-100/50 transition-all">
                        <input 
                          type="file" 
                          ref={videoInputRef}
                          onChange={handleVideoUpload}
                          accept="video/*"
                          className="hidden" 
                        />
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-4">
                            <Video size={28} />
                          </div>
                          <h4 className="font-bold text-brand-secondary mb-2">
                            Grave um vídeo de até 1 minuto se apresentando
                          </h4>
                          <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                            Conte sua experiência na construção civil e por que deseja trabalhar conosco. Envie nos formatos .mp4, .mov ou similar.
                          </p>
                          <button
                            type="button"
                            onClick={() => videoInputRef.current?.click()}
                            className="bg-brand-secondary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-primary transition-all flex items-center gap-2 shadow-md"
                          >
                            <Upload size={16} /> Selecionar Vídeo
                          </button>
                          
                          {videoName && (
                            <div className="mt-4 flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-xs font-semibold border border-green-200">
                              <CheckCircle2 size={14} /> Vídeo carregado: {videoName}
                            </div>
                          )}
                          
                          {errors.videoApresentacao && (
                            <p className="text-xs text-red-500 mt-2.5 flex items-center gap-1 justify-center">
                              <AlertCircle size={14} /> {errors.videoApresentacao}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Buttons Navigation */}
                  <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-12">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-brand-secondary transition-all px-6 py-3 rounded-full hover:bg-gray-50"
                      >
                        <ArrowLeft size={16} /> Voltar
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < stepsMeta.length ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 bg-brand-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:-translate-y-0.5"
                      >
                        Próximo <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 text-white font-bold px-10 py-3.5 rounded-full hover:bg-green-700 transition-all shadow-lg hover:-translate-y-0.5"
                      >
                        Enviar Currículo <Check size={16} />
                      </button>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </form>
          </div>
        )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
