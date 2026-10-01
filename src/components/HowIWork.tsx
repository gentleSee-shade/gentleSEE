import React from 'react';

export const HowIWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'EXPLORE',
      desc: 'Find the problem, question, or opportunity worth working on.',
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      desc: 'Gather context, examine constraints, and figure out what actually matters.',
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'Turn the understanding into something tangible enough to interact with.',
    },
    {
      num: '04',
      title: 'TEST',
      desc: 'Put it in front of reality and see what holds up.',
    },
    {
      num: '05',
      title: 'LEARN',
      desc: "Keep what works. Question what doesn’t. Carry the learning into the next thing.",
    },
  ];

  return (
    <section
      id="how-i-work"
      className="w-full bg-[#F7F6F2] py-20 sm:py-24 md:py-28 border-t border-[#E5E3DC]"
      aria-labelledby="how-i-work-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4">
            <h2
              id="how-i-work-title"
              className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-[#111111] mb-2"
            >
              HOW I WORK
            </h2>
            <p className="text-sm sm:text-base text-[#555555]">
              From an unclear idea to something that can be tested.
            </p>
          </div>

          {/* Right Column: Continuous Connected Vertical Timeline */}
          <div className="lg:col-span-8 relative">
            <div className="relative pl-8 sm:pl-10 space-y-8 sm:space-y-10">
              {/* Connecting Vertical Line */}
              <div
                className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-[#D4D1C7]"
                aria-hidden="true"
              />

              {steps.map((step) => (
                <div key={step.num} className="relative flex items-start group">
                  {/* Circular Node on the Line */}
                  <div
                    className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-3 h-3 rounded-full bg-[#111111] ring-4 ring-[#F7F6F2]"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-heading font-bold text-xs text-[#7A7A7A] tracking-wider min-w-[28px]">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base uppercase tracking-[0.06em] text-[#111111] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
