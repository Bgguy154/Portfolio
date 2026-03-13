import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, GraduationCap } from 'lucide-react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Trophy,
      number: 250,
      suffix: '+',
      label: 'LeetCode Problems',
      description: 'Data Structures & Algorithms',
      color: 'text-amber-500'
    },
    {
      icon: Award,
      number: 3,
      suffix: 'rd',
      label: 'Rank — Code Fiesta',
      description: 'State-Level Coding Competition (200+ participants)',
      color: 'text-blue-500'
    },
    {
      icon: GraduationCap,
      number: 1,
      suffix: '',
      label: 'Certification',
      description: 'Web Development Bootcamp — Aadi Foundation x Microsoft',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-24" ref={ref}>
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
            Achievements & recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones in my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.label}
              achievement={achievement}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, index, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = achievement.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, achievement.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-muted rounded-2xl">
          <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
        </div>
      </div>

      <div className="mb-4">
        <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
          {count}
          <span className={achievement.color}>{achievement.suffix}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {achievement.label}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementsSection;