import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Target, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in seconds and set up your learning profile. Tell us your goals and interests.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Choose Your Path',
    description: 'Select subjects, courses, or skills you want to master. Our AI will create a personalized plan.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '03',
    icon: Target,
    title: 'Learn with AI',
    description: 'Study with your AI tutor, take smart notes, and practice with adaptive exams.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Track Progress',
    description: 'Monitor your growth, earn achievements, and celebrate your learning milestones.',
    color: 'from-pink-500 to-rose-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Simple Process</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How{' '}
              <span className="text-gradient">stdilicom</span>{' '}
              Works
            </h2>

            <p className="text-lg text-gray-400 mb-10">
              Getting started with stdilicom is easy. Follow these simple steps to begin 
              your AI-powered learning journey today.
            </p>

            {/* Progress indicator */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">4 simple steps</span>
            </div>
          </motion.div>

          {/* Right content - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative"
              >
                <div className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Number */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center">
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-full w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Active Learners', value: 'Growing Daily' },
            { label: 'Subjects Available', value: '50+' },
            { label: 'AI Interactions', value: 'Unlimited' },
            { label: 'Success Rate', value: '95%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
