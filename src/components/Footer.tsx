import React from 'react';
import { Wordmark } from './Wordmark';

interface FooterProps {
  onNavigateHomeAnchor: (anchor: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHomeAnchor }) => {
  const navItems = [
    { label: 'Work', anchor: 'work' },
    { label: 'Process', anchor: 'how-i-work' },
    { label: 'About', anchor: 'about' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Contact', anchor: 'contact' },
  ];

  return (
    <footer
      className="w-full bg-[#F7F6F2] text-[#555555] py-12 border-t border-[#E5E3DC]"
      role="contentinfo"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Wordmark */}
        <div className="flex items-center">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#/';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A] rounded-sm py-1"
            aria-label="gentleSEE, home"
          >
            <Wordmark className="h-7 w-auto" />
          </a>
        </div>

        {/* Centre: Nav links & Contact links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-xs">
          <nav
            className="flex items-center gap-6"
            aria-label="Footer Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.anchor}
                href={`#${item.anchor}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHomeAnchor(item.anchor);
                }}
                className="text-[#555555] hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block w-[1px] h-3.5 bg-[#D4D1C7]" aria-hidden="true" />

          <div className="flex items-center gap-5 text-[#555555]">
            <a
              href="mailto:e.seworh@gmail.com"
              className="hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
            >
              e.seworh@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-seworh-88b6173b0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
            >
              Emmanuel Seworh
            </a>
            <a
              href="https://github.com/gentleSee-shade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors focus:outline-none focus-visible:underline"
            >
              @gentleSee-shade
            </a>
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-[#7A7A7A]">
          <span>© 2026 gentleSEE</span>
        </div>
      </div>
    </footer>
  );
};
