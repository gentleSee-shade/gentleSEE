import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { HowIWork } from './components/HowIWork';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';
import { projectsData } from './data/projects';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const route = currentHash.replace(/^#/, '') || '/';
  const isCaseStudy = route.startsWith('/work/');
  const currentProjectId = isCaseStudy ? route.replace('/work/', '') : null;

  const currentProject = projectsData.find(
    (p) => p.id === currentProjectId || p.caseStudyUrl === currentHash
  );

  const currentProjectIndex = projectsData.findIndex(
    (p) => p.id === currentProjectId || p.caseStudyUrl === currentHash
  );

  const nextProject =
    currentProjectIndex !== -1
      ? projectsData[(currentProjectIndex + 1) % projectsData.length]
      : projectsData[0];

  useEffect(() => {
    if (!isCaseStudy) {
      document.title = 'gentleSEE — Seworh Emmanuel Elikem';
    }
  }, [isCaseStudy]);

  const handleSelectProject = (projectId: string) => {
    window.location.hash = `#/work/${projectId}`;
  };

  const handleBackToWork = () => {
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateHomeAnchor = (anchor: string) => {
    if (isCaseStudy) {
      window.location.hash = `#${anchor}`;
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${anchor}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] font-sans antialiased selection:bg-[#142B4A] selection:text-white">
      {/* Primary Top Bar */}
      <Nav
        currentRoute={route}
        onNavigateHomeAnchor={handleNavigateHomeAnchor}
      />

      <main id="main-content">
        {isCaseStudy && currentProject ? (
          <CaseStudy
            project={currentProject}
            nextProject={nextProject}
            onBack={handleBackToWork}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <>
            {/* 1. Hero Section (Warm off-white, two-part editorial) */}
            <Hero />

            {/* 2. Selected Work (Editorial 4-Project Index) */}
            <SelectedWork
              projects={projectsData}
              onSelectProject={handleSelectProject}
            />

            {/* 3. How I Work (Connected continuous timeline) */}
            <HowIWork />

            {/* 4. About (Narrative, portrait, evidence rows) */}
            <AboutMe />

            {/* 5. Skills (3 groups without meters) */}
            <Skills />

            {/* 6. Contact (Let's Talk, clickable rows) */}
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateHomeAnchor={handleNavigateHomeAnchor} />
    </div>
  );
}
