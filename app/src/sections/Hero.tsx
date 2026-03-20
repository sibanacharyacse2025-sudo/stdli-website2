import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles, BookOpen, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    window.open('https://github.com/sibanacharyacse2025-sudo/study-life/releases/download/v1.0/app-debug.apk', '_blank');
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">AI-Powered Learning</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">stdilicom</span>
              <br />
              <span className="text-gradient">AI Powered</span>
              <br />
              <span className="text-white">Smart Learning</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Learn smarter, connect better, grow faster. Your personal AI tutor, 
              smart notes, and mentor network - all in one powerful app.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="btn-primary-gradient text-lg group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download APK
              </Button>
              <Button
                onClick={scrollToFeatures}
                size="lg"
                variant="outline"
                className="btn-secondary text-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="text-sm">AI Tutor</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Mentor Network</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="w-5 h-5 text-teal-400" />
                <span className="text-sm">AI Counsellor</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow effect behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]" />
            
            {/* Phone mockup */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative w-72 sm:w-80 lg:w-96">
                {/* Phone frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
                    
                    {/* App screenshot */}
                    <img
                      src="/screenshot-1.png"
                      alt="stdilicom App"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Screen glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-20 h-20"
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-purple-500/30" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-16 h-16"
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-blue-500/30" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
