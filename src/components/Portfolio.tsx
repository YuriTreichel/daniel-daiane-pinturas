import { useState } from 'react';
import { ArrowUpRight, Play, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { 
      id: 1,
      title: "Revitalização Completa", 
      items: [
        { type: "video", src: "/assets/projetos/projeto-1/AQMxq7szj99oD6iHn7E8fUxdywdez2_RycludQ4nr8p-euhy9ngNGNXQLPZh9DUdvqdctH5c0t8A1SfB6iE1gAlmMVkkip20.mp4" },
        { type: "image", src: "/assets/projetos/projeto-1/671299299_17996610554925330_7613915909359094307_n..jpg" },
        { type: "image", src: "/assets/projetos/projeto-1/671170556_17996610632925330_775297753665582733_n..jpg" },
        { type: "image", src: "/assets/projetos/projeto-1/671156004_17996610569925330_5691475236959002777_n..jpg" },
        { type: "image", src: "/assets/projetos/projeto-1/670904042_17996610620925330_7654778964648848394_n..jpg" },
        { type: "image", src: "/assets/projetos/projeto-1/670879015_17996610596925330_7972421657826378509_n..jpg" },
        { type: "image", src: "/assets/projetos/projeto-1/671227409_17996610530925330_991252774847110632_n..jpg" }
      ],
      size: "large",
      desc: "Processo detalhado de revitalização de pintura externa e acabamentos finos."
    },
    { 
      id: 2,
      title: "Pintura Residencial", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-2/projeto-2.webp" }
      ],
      size: "medium",
      desc: "Acabamento de alta qualidade em residência unifamiliar."
    },
    { 
      id: 3,
      title: "Design de Interiores", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-3/projeto-3.webp" }
      ],
      size: "small",
      desc: "Harmonização de cores e texturas em ambientes internos."
    },
    { 
      id: 4,
      title: "Renovação Externa", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-4/projeto-4.webp" }
      ],
      size: "small",
      desc: "Tratamento de superfícies e pintura de proteção para fachadas."
    },
    { 
      id: 5,
      title: "Acabamentos Modernos", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-5/projeto-5.webp" },
        { type: "image", src: "/assets/projetos/projeto-5/projeto-5_1.webp" },
        { type: "image", src: "/assets/projetos/projeto-5/projeto-5_2.webp" }
      ],
      size: "medium",
      desc: "Estética contemporânea com acabamentos foscos e acetinados."
    },
    { 
      id: 6,
      title: "Pintura Comercial", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-6/projeto-6.webp" }
      ],
      size: "small",
      desc: "Execução ágil e limpa para estabelecimentos comerciais."
    },
    { 
      id: 7,
      title: "Vídeo Case: Transformação", 
      items: [
        { type: "video", src: "/assets/projetos/projeto-7/projeto-7.mp4" },
        { type: "image", src: "/assets/projetos/projeto-7/projeto-7_1.webp" }
      ],
      size: "medium",
      desc: "Acompanhamento em vídeo de uma renovação predial completa."
    },
    { 
      id: 8,
      title: "Detalhes Impecáveis", 
      items: [
        { type: "image", src: "/assets/projetos/projeto-8/projeto-8.webp" }
      ],
      size: "small",
      desc: "Foco na perfeição dos recortes e detalhes de acabamento."
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.items.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.items.length) % selectedProject.items.length);
    }
  };

  return (
    <section id="portfolio" className="w-full px-6 md:px-12 py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Galeria de Projetos
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-secondary leading-tight">
              Transformações Que<br />Falam Por Si!
            </h2>
          </div>
          <div className="max-w-md text-right">
            <p className="text-gray-500 mb-8 text-lg">
              Explore nossa galeria completa e acompanhe nossas transformações diárias no Instagram.
            </p>
            <a 
              href="https://www.instagram.com/danieledaianepinturas/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-brand-secondary text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-3 hover:bg-brand-primary transition-all shadow-xl hover:-translate-y-1"
            >
              Ver Galeria Completa <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl break-inside-avoid cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {project.items[0].type === 'video' ? (
                <div className="w-full relative aspect-video">
                  <video 
                    src={`${project.items[0].src}#t=0.001`} 
                    preload="metadata"
                    muted 
                    loop 
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-125 transition-transform">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={project.items[0].src} 
                  alt={project.title}
                  className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 ${
                    idx % 3 === 0 ? 'aspect-[3/4]' : idx % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
                  }`} 
                />
              )}
              
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-secondary scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <Plus size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-secondary/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-brand-secondary rounded-[2rem] overflow-hidden shadow-2xl h-full max-h-[85vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white text-brand-secondary hover:bg-brand-primary hover:text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-gray-100"
              >
                <X size={24} />
              </button>

              <div className="w-full h-full bg-brand-secondary relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {selectedProject.items[currentSlide].type === 'video' ? (
                      <video 
                        src={`${selectedProject.items[currentSlide].src}#t=0.001`} 
                        preload="metadata"
                        autoPlay 
                        controls 
                        className="w-full h-full object-contain bg-black"
                      />
                    ) : (
                      <img 
                        src={selectedProject.items[currentSlide].src} 
                        className="w-full h-full object-contain bg-gray-900" 
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {selectedProject.items.length > 1 && (
                  <>
                    <button 
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-all z-10 border border-white/20"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-all z-10 border border-white/20"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {selectedProject.items.map((_: any, i: number) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-brand-primary w-4' : 'bg-white/30'}`}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
