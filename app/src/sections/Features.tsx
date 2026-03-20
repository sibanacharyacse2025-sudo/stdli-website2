import { motion } from 'framer-motion';
import { 
  Bot, 
  FileText, 
  ClipboardCheck, 
  Users, 
  MessageCircle, 
  Headphones, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Tutor',
    description: 'Get personalized learning assistance 24/7. Our AI tutor adapts to your learning style and helps you master any subject.',
    color: 'from-purple-500 to-purple-600',
    glowColor: 'glow-purple',
  },
  {
    icon: FileText,
    title: 'Smart Notes',
    description: 'AI-powered note-taking that organizes, summarizes, and helps you review your study materials efficiently.',
    color: 'from-blue-500 to-blue-600',
    glowColor: 'glow-blue',
  },
  {
    icon: ClipboardCheck,
    title: 'Practice Exams',
    description: 'Test your knowledge with adaptive practice exams that identify your weak areas and help you improve.',
    color: 'from-teal-500 to-teal-600',
    glowColor: 'glow-teal',
  },
  {
    icon: Users,
    title: 'Mentor Network',
    description: 'Connect with experienced mentors and tutors who can guide you through your learning journey.',
    color: 'from-pink-500 to-rose-600',
    glowColor: 'shadow-pink-500/40',
  },
  {
    icon: MessageCircle,
    title: 'Community Groups',
    description: 'Join study groups, collaborate with peers, and learn together in a supportive community environment.',
    color: 'from-orange-500 to-amber-600',
    glowColor: 'shadow-orange-500/40',
  },
  {
    icon: Headphones,
    title: 'Voice Learning',
    description: 'Learn on the go with voice-enabled lessons, podcasts, and audio summaries of your study materials.',
    color: 'from-cyan-500 to-cyan-600',
    glowColor: 'shadow-cyan-500/40',
  },
  {
    icon: HeartHandshake,
    title: 'AI Counsellor',
    description: 'Get guidance on career paths, study strategies, and personal development from our AI counsellor.',
    color: 'from-violet-500 to-violet-600',
    glowColor: 'shadow-violet-500/40',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Powerful Features</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            stdilicom combines cutting-edge AI technology with proven learning methods 
            to help you achieve your educational goals faster.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative ${index === 6 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
            >
              <div className="relative h-full glass-card-hover p-6 lg:p-8 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${feature.glowColor}`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Ready to transform your learning experience?</p>
          <a
            href="https://github.com/sibanacharyacse2025-sudo/study-life/releases/download/v1.0/app-debug.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Download the app now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
