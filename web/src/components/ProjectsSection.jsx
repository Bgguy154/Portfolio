import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Library Management System',
      description: 'Comprehensive library management solution with advanced features for book tracking and user management',
      tech: ['Node.js', 'Express', 'MongoDB'],
      highlights: [
        '500+ book records management',
        'Multi-copy tracking system',
        '2 user roles with permissions',
        '12+ REST API endpoints',
        'Admin dashboard with 8+ features',
        '60% reduction in manual processing'
      ],
      github: 'https://github.com/tanmaytapre',
      live: 'https://library-management-system-2twr.onrender.com/',
      featured: true
    },
    {
      title: 'MERN Task Manager',
      description: 'Full-stack task management application with real-time updates and secure authentication',
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      highlights: [
        '100+ concurrent users support',
        'JWT authentication',
        'Redux state management',
        '5+ protected routes',
        '7 API endpoints',
        '<200ms response time',
        '80% reduction in state bugs'
      ],
      github: 'https://github.com/tanmaytapre',
      live: 'https://mern-task-manager-95qj.onrender.com/',
      featured: false
    },
    {
      title: 'WorldExplorer',
      description: 'Interactive country data visualization platform built with modern React and Vite',
      tech: ['React', 'Vite'],
      highlights: [
        '250+ countries data visualization',
        '60% faster builds with Vite',
        'Fully responsive design',
        '<2s load time',
        'Deployed on Vercel',
        '40% bundle size reduction'
      ],
      github: 'https://github.com/tanmaytapre',
      live: 'https://country-react-ecru.vercel.app/',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-muted/30" ref={ref}>
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
            Featured projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Key achievements:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-6 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-all duration-200 active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;