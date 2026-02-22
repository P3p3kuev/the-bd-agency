'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onCtaClick?: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { label: 'Problem', id: 'problem', href: undefined },
    { label: 'Architecture', id: 'architecture', href: undefined },
    { label: 'Methodology', id: undefined, href: '/methodology' },
    { label: 'Assessment', id: 'assessment', href: undefined },
  ];

  const scrollToSection = (id: string) => {
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
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="BD Agency"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) =>
            section.href ? (
              <a
                key={section.label}
                href={section.href}
                className="text-sm text-gray-700 hover:text-navy-900 transition-colors font-medium"
              >
                {section.label}
              </a>
            ) : (
              <button
                key={section.id}
                onClick={() => section.id && scrollToSection(section.id)}
                className="text-sm text-gray-700 hover:text-navy-900 transition-colors font-medium"
              >
                {section.label}
              </button>
            )
          )}
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
            {sections.map((section) =>
              section.href ? (
                <a
                  key={section.label}
                  href={section.href}
                  className="block w-full text-left text-sm text-gray-700 hover:text-navy-900 font-medium py-2"
                >
                  {section.label}
                </a>
              ) : (
                <button
                  key={section.id}
                  onClick={() => section.id && scrollToSection(section.id)}
                  className="block w-full text-left text-sm text-gray-700 hover:text-navy-900 font-medium py-2"
                >
                  {section.label}
                </button>
              )
            )}
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
