import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#F7F6F2] py-20 sm:py-24 md:py-28 border-t border-[#E5E3DC]"
      aria-labelledby="contact-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading, arrow & invitation */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2
                id="contact-title"
                className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-[#111111]"
              >
                LET'S TALK
              </h2>
              <span className="w-8 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
            </div>

            <span className="block text-2xl text-[#142B4A] mb-4" aria-hidden="true">
              →
            </span>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-md">
              Have a project, idea, or problem you’d like to explore? I’d like to hear about it.
            </p>
          </div>

          {/* Right Column: Monochrome vector icon + label + arrow as ONE clickable link */}
          <div className="space-y-4 pt-2">
            {/* Email link */}
            <a
              href="mailto:e.seworh@gmail.com"
              className="group flex items-center justify-between p-4 bg-transparent hover:bg-[#EAE6DA]/40 border border-[#E5E3DC] rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-[#111111]">
                  e.seworh@gmail.com
                </span>
              </div>
              <span
                className="text-xs font-semibold text-[#142B4A] group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/emmanuel-seworh-88b6173b0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-transparent hover:bg-[#EAE6DA]/40 border border-[#E5E3DC] rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-[#111111]">
                  Emmanuel Seworh
                </span>
              </div>
              <span
                className="text-xs font-semibold text-[#142B4A] group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* GitHub link */}
            <a
              href="https://github.com/gentleSee-shade"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-transparent hover:bg-[#EAE6DA]/40 border border-[#E5E3DC] rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-[#111111]">
                  @gentleSee-shade
                </span>
              </div>
              <span
                className="text-xs font-semibold text-[#142B4A] group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
