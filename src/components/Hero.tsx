import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative w-full bg-[#F7F6F2] text-[#111111] pt-8 sm:pt-14 lg:pt-20 pb-0 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Text & Statements */}
          <div className="lg:col-span-7 pt-4 pb-12 sm:pb-16 lg:pb-24 z-10">
            {/* Small uppercase kicker */}
            <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#555555] mb-5">
              EMMANUEL ELIKEM SEWORH
            </span>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.12] tracking-tight text-[#111111] mb-8 max-w-2xl">
              I build, explore, and<br />
              turn ideas into things<br />
              that work.
            </h1>

            {/* Identity / Context */}
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Logistics &amp; Supply Chain Management Student · Builder · KNUST
            </p>

            {/* CTA */}
            <div>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#142B4A] hover:text-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A] py-1"
              >
                <span>Explore my work</span>
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none flex items-end justify-center">
              <div
                className="hero-portrait w-full relative overflow-hidden"
                style={{ height: 'clamp(420px, 48vw, 620px)' }}
              >
                {!imageError ? (
                  <img
                    src="assets/01-hero-portrait.jpeg"
                    alt="Portrait of Emmanuel Elikem Seworh"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 12%' }}
                    fetchPriority="high"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('01-hero-portrait.jpg')) {
                        target.src = 'assets/01-hero-portrait.jpg';
                      } else {
                        setImageError(true);
                      }
                    }}
                  />
                ) : (
                  <div
                    className="w-full h-full bg-[#EAE6DA] flex items-center justify-center p-6 text-center text-[#555555] text-sm"
                    role="img"
                    aria-label="Portrait of Emmanuel Elikem Seworh"
                  >
                    Emmanuel Elikem Seworh
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
