import React from 'react';
import { Project } from '../data/projects';

interface SelectedWorkProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects, onSelectProject }) => {
  return (
    <section
      id="work"
      className="w-full bg-[#F7F6F2] py-20 sm:py-24 md:py-28 border-t border-[#E5E3DC]"
      aria-labelledby="selected-work-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <h2
            id="selected-work-title"
            className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-[#111111] mb-2"
          >
            SELECTED WORK
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            Things I’ve been building, testing, and exploring.
          </p>
        </div>

        {/* 4-Project Editorial Index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col focus-within:ring-2 focus-within:ring-[#142B4A] rounded-xs"
            >
              {/* Visual Container */}
              <a
                href={project.caseStudyUrl}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject(project.id);
                }}
                className="block relative w-full aspect-[4/3] bg-[#EAE6DA] overflow-hidden rounded-xs border border-[#E5E3DC] mb-5 focus:outline-none"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    // Fallback extensions if needed
                    if (project.id === 'blue-outreach' && !target.src.includes('.jpg')) {
                      target.src = 'assets/03-blue-outreach.jpg';
                    }
                  }}
                />
              </a>

              {/* Number with hairline divider */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading text-xs font-bold text-[#111111]">{project.num}</span>
                <span className="w-8 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                <a
                  href={project.caseStudyUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProject(project.id);
                  }}
                  className="hover:text-[#142B4A] transition-colors focus:outline-none focus-visible:underline"
                >
                  {project.title}
                </a>
              </h3>

              {/* Subtitle / Descriptor */}
              <p className="text-xs text-[#555555] leading-relaxed mb-2.5">
                {project.subtitle}
              </p>

              {/* Type / Status */}
              <div className="text-[11px] text-[#7A7A7A] font-medium mb-4">
                {project.type}
              </div>

              {/* View Case Study CTA Link */}
              <div className="mt-auto pt-1">
                <a
                  href={project.caseStudyUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProject(project.id);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B4A] hover:text-[#111111] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#142B4A]"
                >
                  <span>View case study</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
