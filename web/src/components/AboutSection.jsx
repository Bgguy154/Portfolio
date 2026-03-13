import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'MERN Stack Expertise',
      description: 'Specialized in building full-stack applications using MongoDB, Express, React, and Node.js'
    },
    {
      icon: Rocket,
      title: 'Scalable Systems',
      description: 'Focus on creating clean, maintainable code and scalable architectures'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Passionate about staying current with modern web development practices'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            About me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              I'm a passionate full stack developer with a deep love for creating scalable web applications. 
              My journey in software development has been driven by curiosity and a commitment to writing 
              clean, efficient code that solves real-world problems.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Specializing in the MERN stack, I focus on building robust systems with clean architecture 
              and maintainable codebases. From designing intuitive user interfaces to architecting scalable 
              backend services, I enjoy every aspect of the development process.
            </p>
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    B.Tech in Computer Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    Government College of Engineering, Jalgaon
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expected Graduation: 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;