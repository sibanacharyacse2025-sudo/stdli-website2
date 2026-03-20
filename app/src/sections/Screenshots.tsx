import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, Layers, MessageSquare, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screenshots = [
  {
    id: 1,
    image: '/screenshot-1.png',
    title: 'AI Tutor Dashboard',
    description: 'Your personal AI tutor ready to help with any subject, anytime.',
    icon: Brain,
  },
  {
    id: 2,
    image: '/screenshot-2.png',
    title: 'Smart Notes',
    description: 'Organize and access your notes with AI-powered summaries.',
    icon: Layers,
  },
  {
    id: 3,
    image: '/screenshot-3.png',
    title: 'Practice Exams',
    description: 'Test your knowledge with adaptive practice questions.',
    icon: Smartphone,
  },
  {
    id: 4,
    image: '/screenshot-4.png',
    title: 'AI Counsellor',
    description: 'Get guidance on your learning journey and career path.',
    icon: MessageSquare,
  },
];

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6"
          >
            <Smartphone className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-300 font-medium">App Preview</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See stdilicom in{' '}
            <span className="text-gradient">Action</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take a peek at the intuitive interface designed to make your learning 
            experience seamless and enjoyable.
          </p>
        </motion.div>

        {/* Screenshot carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main display */}
          <div className="relative flex justify-center items-center">
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 lg:-left-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 lg:-right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>

            {/* Phone frames container */}
            <div className="relative flex items-center justify-center gap-4 lg:gap-8">
              {screenshots.map((screenshot, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                const isVisible = Math.abs(offset) <= 1;

                if (!isVisible && typeof window !== 'undefined' && window.innerWidth < 1024) return null;

                return (
                  <motion.div
                    key={screenshot.id}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 280),
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      rotateY: offset * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : -15),
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94] as const,
                    }}
                    className={`relative ${!isActive && typeof window !== 'undefined' && window.innerWidth < 1024 ? 'hidden' : 'block'}`}
                  >
                    {/* Phone frame */}
                    <div className="relative w-64 sm:w-72 lg:w-80">
                      {/* Glow effect */}
                      {isActive && (
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-[3rem] blur-2xl" />
                      )}
                      
                      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700">
                        {/* Screen */}
                        <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />
                          
                          {/* Screenshot */}
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* Label */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full"
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <screenshot.icon className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">{screenshot.title}</h3>
                          </div>
                          <p className="text-sm text-gray-400">{screenshot.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-20 lg:mt-24">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                index === currentIndex
                  ? 'bg-white/10 border-purple-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <screenshot.icon className={`w-6 h-6 mb-3 ${
                index === currentIndex ? 'text-purple-400' : 'text-gray-400'
              }`} />
              <h4 className={`font-semibold mb-1 ${
                index === currentIndex ? 'text-white' : 'text-gray-300'
              }`}>
                {screenshot.title}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-2">{screenshot.description}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
