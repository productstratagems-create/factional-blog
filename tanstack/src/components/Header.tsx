import { useState } from 'react';
import { Logo } from './Logo';
import { Divider } from './Divider';

interface Props {
  currentPath: string;
}

const NAV_LINKS = [
  { href: '/', label: 'Hjem' },
  { href: '/categories/missilforsvar', label: 'Kategorier' },
  { href: '/about', label: 'Om' },
];

export function Header({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  const linkCls = (href: string) => {
    const active = currentPath === href;
    return [
      'font-ui text-xs uppercase tracking-widest transition-colors',
      active
        ? 'text-teal border-b-2 border-teal pb-0.5'
        : 'text-heading hover:text-navy',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 bg-white border-b border-border z-50">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Desktop: logo left */}
          <a href="/" className="hidden sm:block">
            <Logo size="md" />
          </a>

          {/* Mobile: logo centered */}
          <a href="/" className="sm:hidden absolute left-1/2 -translate-x-1/2">
            <Logo size="sm" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6" aria-label="Primærnavigasjon">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={linkCls(l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden ml-auto flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
            aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-heading transition-transform origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-heading transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-heading transition-transform origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="sm:hidden py-4 flex flex-col gap-4 border-t border-border"
            aria-label="Mobilnavigasjon"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={linkCls(l.href)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <Divider spacing="none" />
    </header>
  );
}
