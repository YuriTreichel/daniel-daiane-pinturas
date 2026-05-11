import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from 'lucide-react';

export const Documentary = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videos = [
    {
      id: 1,
      url: "/assets/videos/about_video.mp4",
    },
    {
      id: 2,
      url: "/assets/videos/about_2.mp4",
    }
  ];

  return (
    <section id="documentario" className="w-full py-24 bg-brand-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Um Legado Que Atravessa Gerações
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Conheça as pessoas por trás da nossa marca. Dos fundadores aos sucessores, compartilhamos aqui a história e a paixão da nossa família pela arte da pintura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-black cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <video 
                src={`${video.url}#t=0.001`} 
                preload="metadata"
                muted 
                loop 
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:scale-110">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-secondary/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-black rounded-[2rem] overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white text-brand-secondary hover:bg-brand-primary hover:text-white rounded-full flex items-center justify-center transition-all shadow-xl"
              >
                <X size={24} />
              </button>

              <video 
                src={selectedVideo.url} 
                autoPlay 
                controls 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
