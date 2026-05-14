import { Logo } from './Logo';

const CATEGORIES = [
  { href: '/categories/missilforsvar', label: 'Missilforsvar' },
  { href: '/categories/anskaffelse', label: 'Anskaffelse' },
  { href: '/categories/analyse', label: 'Analyse' },
  { href: '/categories/history', label: 'Historie' },
  { href: '/categories/nato', label: 'NATO' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heading text-white mt-16">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <Logo size="md" className="text-white [&]:text-white" />
            <p className="font-ui text-sm text-white/70 leading-relaxed max-w-xs">
              Nyheter og analyser om norsk luftvern, missilforsvar og
              sikkerhetspolitikk.
            </p>
          </div>

          {/* Categories col */}
          <div>
            <h3 className="font-ui text-xs uppercase tracking-widest text-white/50 mb-4">
              Kategorier
            </h3>
            <ul className="flex flex-col gap-2">
              {CATEGORIES.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="font-ui text-sm text-white/80 hover:text-teal transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe col */}
          <div>
            <h3 className="font-ui text-xs uppercase tracking-widest text-white/50 mb-4">
              Følg med
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/api/rss.xml"
                className="inline-flex items-center gap-2 font-ui text-sm text-white/80 hover:text-teal transition-colors"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M3.75 3a.75.75 0 0 0 0 1.5A12.75 12.75 0 0 1 16.5 17.25a.75.75 0 0 0 1.5 0A14.25 14.25 0 0 0 3.75 3Z" />
                  <path d="M3.75 7.5a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 12 17.25a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 3.75 7.5Z" />
                  <circle cx="3.75" cy="16.5" r="1.5" />
                </svg>
                RSS-feed
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 font-ui text-xs text-white/40">
          © {year} Norsk Luftvern. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
}
