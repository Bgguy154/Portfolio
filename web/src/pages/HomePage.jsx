import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import SkillsSection from '@/components/SkillsSection.jsx';
import ProjectsSection from '@/components/ProjectsSection.jsx';
import AchievementsSection from '@/components/AchievementsSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import { Github, Linkedin, Mail } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Tanmay Tapre - Full Stack Developer | MERN Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Tanmay Tapre, a Full Stack Developer specializing in MERN stack. Building scalable web applications with modern JavaScript technologies."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <footer className="bg-muted/30 border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold text-foreground">Tanmay Tapre</p>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/tanmaytapre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanmay-tapre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="mailto:tanmaytapre12345@gmail.com"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  © 2026 Tanmay Tapre. All rights reserved.
                </p>
                <div className="flex items-center gap-4 mt-2 justify-center md:justify-end">
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;