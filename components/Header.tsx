'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onCtaClick?: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { label: 'Problem', id: 'problem', href: '/#problem' },
    { label: 'Architecture', id: 'architecture', href: '/#architecture' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Assessment', id: 'assessment', href: '/#assessment' },
  ];

  const handleNavClick = (id: string | undefined) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="The BD Agency"
              width={400}
              height={154}
              priority
              sizes="(max-width: 768px) 140px, 180px"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              onClick={() => handleNavClick(section.id)}
              className="text-sm text-gray-700 hover:text-navy-900 transition-colors font-medium"
            >
              {section.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={onCtaClick}
            className="px-6 py-2 bg-navy-900 text-white text-sm font-semibold rounded hover:bg-navy-800 transition-colors"
          >
            Request Assessment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-navy-900 transition-all ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {sections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                onClick={() => handleNavClick(section.id)}
                className="block w-full text-left text-sm text-gray-700 hover:text-navy-900 font-medium py-2"
              >
                {section.label}
              </Link>
            ))}
            <button
              onClick={onCtaClick}
              className="w-full px-4 py-2 bg-navy-900 text-white text-sm font-semibold rounded hover:bg-navy-800 transition-colors mt-4"
            >
              Request Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
