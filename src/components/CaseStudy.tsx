import React, { useEffect, useRef } from 'react';
import { Project } from '../data/projects';

interface CaseStudyProps {
  project: Project;
  nextProject: Project;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  project,
  nextProject,
  onBack,
  onSelectProject,
}) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.title = `${project.title} — gentleSEE`;
    window.scrollTo(0, 0);
    h1Ref.current?.focus();
  }, [project]);

  const { sections } = project;

  return (
    <article
      className="w-full min-h-screen bg-[#F7F6F2] text-[#111111] pt-6 pb-24 border-t border-[#E5E3DC]"
      aria-labelledby="case-study-heading"
    >
      <div className="max-w-[960px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between py-6 border-b border-[#E5E3DC] mb-12 text-xs font-medium">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#555555] hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline cursor-pointer"
          >
            <span aria-hidden="true">←</span>
            <span>All work</span>
          </button>

          <a
            href={nextProject.caseStudyUrl}
            onClick={(e) => {
              e.preventDefault();
              onSelectProject(nextProject.id);
            }}
            className="inline-flex items-center gap-2 text-[#555555] hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
          >
            <span>Next: {nextProject.title}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 1. Project Introduction */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#555555] mb-3">
            <span>Project {project.num}</span>
            <span className="w-6 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
            <span>{project.type}</span>
          </div>

          <h1
            id="case-study-heading"
            ref={h1Ref}
            tabIndex={-1}
            className="font-heading font-bold text-3xl sm:text-5xl md:text-[52px] text-[#111111] tracking-tight leading-[1.15] mb-3 focus:outline-none"
          >
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#142B4A] font-medium mb-6">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl border-l-2 border-[#142B4A] pl-4 py-0.5">
            {project.description}
          </p>
        </header>

        {/* 5. Work / Artifact Visual */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xs overflow-hidden border border-[#E5E3DC] bg-[#EAE6DA] mb-16 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Structured Sections */}
        <div className="space-y-12 max-w-[720px]">
          {/* Detailed Intro if available */}
          {sections.intro && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                01 · Overview
              </span>
              <p className="text-base sm:text-[17px] text-[#111111] leading-relaxed font-normal">
                {sections.intro}
              </p>
            </section>
          )}

          {/* 2. Context / Problem */}
          {sections.contextProblem && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                02 · Context &amp; Problem
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                Why this was explored
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {sections.contextProblem}
              </p>
            </section>
          )}

          {/* 3. What Was Explored */}
          {sections.whatWasExplored && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                03 · Investigation
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                What was explored
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {sections.whatWasExplored}
              </p>
            </section>
          )}

          {/* 4. Process / Thinking */}
          {sections.processThinking && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                04 · Process &amp; Thinking
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                How the problem was approached
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {sections.processThinking}
              </p>
            </section>
          )}

          {/* Work / Output Artifact Details */}
          {sections.workArtifact && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                05 · Work &amp; Artifact
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                The tangible outcome
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-5">
                {sections.workArtifact}
              </p>

              {/* Working PDF link for Critical Thinking */}
              {sections.artifactLink && (
                <div className="pt-2">
                  <a
                    href={sections.artifactLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#142B4A] hover:bg-[#111111] text-white text-xs uppercase tracking-[0.12em] font-semibold transition-colors rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
                  >
                    <span>{sections.artifactLink.label}</span>
                    <span aria-hidden="true">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </a>
                </div>
              )}
            </section>
          )}

          {/* 6. Result / Learning */}
          {sections.resultLearning && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                06 · Results &amp; Learning
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                What was learned
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {sections.resultLearning}
              </p>
            </section>
          )}

          {/* 7. Limitations */}
          {sections.limitations && (
            <section className="border-t border-[#E5E3DC] pt-8">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A7A] mb-2">
                07 · Current Limitations
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3">
                Where things stand &amp; constraints
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {sections.limitations}
              </p>
            </section>
          )}
        </div>

        {/* 9. Navigation to another project */}
        <div className="mt-16 pt-8 border-t border-[#E5E3DC] flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#555555] hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline py-2 cursor-pointer"
          >
            <span aria-hidden="true">←</span>
            <span>Back to all work</span>
          </button>

          <a
            href={nextProject.caseStudyUrl}
            onClick={(e) => {
              e.preventDefault();
              onSelectProject(nextProject.id);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EAE6DA] hover:bg-[#E5E3DC] text-xs uppercase tracking-[0.12em] font-semibold text-[#111111] transition-colors rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
          >
            <span>Next: {nextProject.title}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
};
