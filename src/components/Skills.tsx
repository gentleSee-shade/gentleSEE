import React from 'react';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: 'BUILDING & TECHNOLOGY',
      items: [
        'AI-assisted development',
        'Python',
        'Product design',
        'Graphic design',
        'Web development',
      ],
    },
    {
      category: 'BUSINESS & ANALYSIS',
      items: [
        'Google Sheets & modelling',
        'Data organization',
        'Expense tracking & bookkeeping',
        'Inventory management',
        'Financial analysis fundamentals',
        'Problem analysis',
      ],
    },
    {
      category: 'COMMUNICATION',
      items: [
        'Written communication',
        'Public speaking',
        'Cross-cultural communication',
        'Workflow coordination',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#F7F6F2] py-20 sm:py-24 md:py-28 border-t border-[#E5E3DC]"
      aria-labelledby="skills-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <h2
              id="skills-title"
              className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-[#111111]"
            >
              SKILLS
            </h2>
            <span className="w-8 h-[1px] bg-[#D4D1C7]" aria-hidden="true" />
          </div>
          <p className="text-sm sm:text-base text-[#555555]">
            Things I currently work with.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`flex flex-col ${
                idx !== skillGroups.length - 1
                  ? 'md:border-r md:border-[#E5E3DC] md:pr-10'
                  : ''
              }`}
            >
              <h3 className="font-heading font-bold text-xs uppercase tracking-[0.12em] text-[#111111] mb-5 pb-2 border-b border-[#E5E3DC]">
                {group.category}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#555555]">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
