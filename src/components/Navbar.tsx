import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navLinks = [
  { name: 'Home', href: '#home', type: 'section' },
  { name: 'About', href: '#about', type: 'section' },
  { name: 'Projects', href: '/projects', type: 'page' },
  { name: 'Contact', href: '#contact', type: 'section' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const router = useRouter();

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = navLinks
        .filter(link => link.type === 'section')
        .map(link => {
          const el = document.getElementById(link.href.replace('#', ''));
          if (!el) return { name: link.name, offset: 0 };
          return { name: link.name, offset: el.offsetTop - 80 };
        });
      let current = 'Home';
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i].offset) {
          current = offsets[i].name;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for section links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[number]) => {
    if (link.type === 'section') {
      e.preventDefault();
      const el = document.getElementById(link.href.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
      }
    } else if (link.type === 'page') {
      setMenuOpen(false);
      router.push(link.href);
    }
  };

  return (
    <nav
      className="w-full flex items-center px-8 py-4 bg-[#2C2C2C]"
      style={{ minHeight: '64px' }}
      aria-label="Main navigation"
    >
      {/* Left: Logo */}
      <span className="text-2xl font-IBM text-[#FB9402] whitespace-nowrap">My Portfolio</span>
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-end items-center">
        <div className="flex space-x-6 mr-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleNavClick(e, link)}
              className={`text-[#FB9402] font-IBM text-base hover:underline focus:underline transition-all ${active === link.name ? 'underline' : ''}`}
              aria-current={active === link.name ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FB9402] text-[#0A0A0A] font-IBM font-bold" tabIndex={0} aria-label="ภาษาไทย">TH</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FB4A02] text-black font-IBM font-bold" tabIndex={0} aria-label="English">EN</span>
        </div>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden ml-auto text-[#FB9402] focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <rect y="5" width="24" height="2" rx="1" fill="#FB9402" />
          <rect y="11" width="24" height="2" rx="1" fill="#FB9402" />
          <rect y="17" width="24" height="2" rx="1" fill="#FB9402" />
        </svg>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2C2C2C] flex flex-col items-end px-8 py-4 z-50 md:hidden shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleNavClick(e, link)}
              className={`block text-[#FB9402] font-IBM text-lg py-2 hover:underline focus:underline w-full text-right ${active === link.name ? 'underline' : ''}`}
              aria-current={active === link.name ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-2 mt-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FB9402] text-[#0A0A0A] font-IBM font-bold" tabIndex={0} aria-label="ภาษาไทย">TH</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FB4A02] text-black font-IBM font-bold" tabIndex={0} aria-label="English">EN</span>
          </div>
        </div>
      )}
    </nav>
  );
} 