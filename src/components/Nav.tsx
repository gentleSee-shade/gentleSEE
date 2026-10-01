import React, { useState, useEffect } from 'react';
import { Wordmark } from './Wordmark';

interface NavProps {
  currentRoute: string;
  onNavigateHomeAnchor: (anchor: string) => void;
}

export const Nav: React.FC<NavProps> = ({ currentRoute, onNavigateHomeAnchor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const isCaseStudy = currentRoute.startsWith('/work/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isCaseStudy) {
        const sections = ['work', 'how-i-work', 'about', 'skills', 'contact'];
        const scrollPos = window.scrollY + 120;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCaseStudy]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Work', anchor: 'work' },
    { label: 'Process', anchor: 'how-i-work' },
    { label: 'About', anchor: 'about' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Contact', anchor: 'contact' },
  ];

  const handleLinkClick = (anchor: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHomeAnchor(anchor);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#F7F6F2] focus:outline-none focus:ring-2 focus:ring-[#142B4A] focus:text-xs focus:font-semibold focus:tracking-wider uppercase"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 bg-[#F7F6F2]/95 backdrop-blur-md border-b ${
          isScrolled ? 'border-[#E5E3DC] shadow-[0_1px_3px_rgba(0,0,0,0.02)]' : 'border-[#E5E3DC]/70'
        }`}
        role="banner"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 h-20 flex items-center justify-between">
          {/* Wordmark on Left */}
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
              <Wordmark className="h-8 sm:h-9 w-auto" />
            </a>
          </div>

          {/* Navigation Links on Right (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            role="navigation"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = !isCaseStudy && activeSection === item.anchor;
              return (
                <a
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  onClick={(e) => handleLinkClick(item.anchor, e)}
                  className={`text-[13px] tracking-[0.02em] font-medium transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A] ${
                    isActive
                      ? 'text-[#142B4A] font-semibold'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#142B4A]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A] rounded p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden bg-[#F7F6F2] border-b border-[#E5E3DC] px-6 py-6 flex flex-col gap-4 shadow-sm"
          >
            {navItems.map((item) => (
              <a
                key={item.anchor}
                href={`#${item.anchor}`}
                onClick={(e) => handleLinkClick(item.anchor, e)}
                className="min-h-[44px] flex items-center text-sm font-medium text-[#111111] hover:text-[#142B4A] border-b border-[#E5E3DC]/60 pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
