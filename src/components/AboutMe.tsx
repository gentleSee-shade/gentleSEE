import React, { useState } from 'react';

export const AboutMe: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const evidenceRows = [
    {
      institution: 'KNUST',
      detail: 'BSc Logistics & Supply Chain Management',
    },
    {
      institution: 'KNUST YES Scholar',
      detail: '10 months',
    },
    {
      institution: 'Volunteer Hours',
      detail: '100+',
    },
    {
      institution: 'Science Olympiad',
      detail: 'Regional Medalist (3 events)',
    },
    {
      institution: 'Investment Quiz',
      detail: 'Regional 1st Runner-Up',
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#F7F6F2] py-20 sm:py-24 md:py-28 border-t border-[#E5E3DC]"
      aria-labelledby="about-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#111111]">
                ABOUT
              </span>
              <span className="w-8 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
            </div>

            <h2
              id="about-title"
              className="font-heading font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight mb-6"
            >
              I'm Emmanuel Elikem Seworh.
            </h2>

            <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-[#555555]">
              <p>
                I’m interested in what happens when technology, business, and better ways of thinking meet.
              </p>
              <p>
                I spend much of my time exploring problems, discussing ideas with people building products, and turning what I learn into things I can test.
              </p>
              <p>
                My background in Logistics &amp; Supply Chain Management also shapes how I think: systems, constraints, people, resources, and how the pieces work together.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#142B4A] hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
              >
                <span>More about me</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Middle Column: Second Supplied Portrait */}
          <div className="lg:col-span-4">
            <div className="relative w-full aspect-[4/3] bg-[#EAE6DA] overflow-hidden rounded-xs border border-[#E5E3DC]">
              {!imageError ? (
                <img
                  src="assets/02-about-portrait.jpeg"
                  alt="Emmanuel Elikem Seworh in a black crew-neck t-shirt looking off to the side"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('02-about-portrait.jpg')) {
                      target.src = 'assets/02-about-portrait.jpg';
                    } else {
                      setImageError(true);
                    }
                  }}
                />
              ) : (
                <div
                  className="w-full h-full bg-[#EAE6DA] flex items-center justify-center p-6 text-center text-[#555555] text-xs"
                  role="img"
                  aria-label="Emmanuel Elikem Seworh"
                >
                  Emmanuel Elikem Seworh
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Background Evidence Rows */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#111111]">
                BACKGROUND
              </span>
              <span className="w-8 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
            </div>

            <div className="border-t border-[#E5E3DC]">
              {evidenceRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-baseline justify-between py-3.5 border-b border-[#E5E3DC] text-xs"
                >
                  <span className="font-medium text-[#111111]">{row.institution}</span>
                  <span className="text-[#555555] text-right">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
