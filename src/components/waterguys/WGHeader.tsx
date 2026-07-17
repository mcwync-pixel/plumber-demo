import { Droplets, Phone, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Services', href: '#wg-services' },
  { label: 'Why Us', href: '#wg-why-us' },
  { label: 'Reviews', href: '#wg-reviews' },
  { label: 'Areas', href: '#wg-areas' },
  { label: 'Contact', href: '#wg-contact' },
];

export default function WGHeader({ phone = '1300 928 348' }: { phone?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          {/* Logo */}
          <a href="#wg-top" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md">
              <Droplets className="h-6 w-6 text-white" strokeWidth={2.5} fill="white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-slate-800">WaterGuys</span>
              <span className="text-xs font-semibold text-cyan-600">Plumbing</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-cyan-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-3 text-sm font-semibold text-slate-700 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              Call {phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
