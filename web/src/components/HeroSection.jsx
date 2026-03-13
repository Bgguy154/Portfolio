import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const titles = [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const shouldDelete = isDeleting;

      if (!shouldDelete && currentIndex < currentTitle.length) {
        setDisplayedText(currentTitle.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (shouldDelete && currentIndex > 0) {
        setDisplayedText(currentTitle.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!shouldDelete && currentIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum]);

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1699060463533-94ceb428c67f)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tanmay Tapre
          </motion.h1>

          <div className="h-16 sm:h-20 flex items-center justify-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textWrap: 'balance' }}
          >
            Building scalable web applications with modern JavaScript technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1xquHWdD0xDIrDu9XIwUliY990FqYG7lD/view?usp=drive_link"
              download
              className="w-full sm:w-auto px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScroll('#contact')}
              className="w-full sm:w-auto px-8 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://github.com/tanmaytapre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-tapre/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="mailto:tanmaytapre12345@gmail.com"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5
          }}
        >
          <button
            onClick={() => handleScroll('#about')}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-all duration-200"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
