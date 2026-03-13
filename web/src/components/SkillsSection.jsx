import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Wrench, Database } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Full Stack',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'REST APIs'],
      gridClass: 'lg:col-span-2'
    },
    {
      icon: Wrench,
      title: 'Development Skills',
      skills: ['Frontend-Backend Integration', 'API Development', 'Debugging', 'Problem Solving'],
      gridClass: 'lg:col-span-1'
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman'],
      gridClass: 'lg:col-span-1'
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-24" ref={ref}>
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
            Skills & expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${category.gridClass}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;