const LABELS: Record<string, string> = {
  missilforsvar: 'Missilforsvar',
  anskaffelse: 'Anskaffelse',
  history: 'Historie',
  historie: 'Historie',
  teknologi: 'Teknologi',
  analyse: 'Analyse',
  nato: 'NATO',
  øvelse: 'Øvelse',
};

interface Props {
  category: string;
  href?: string;
}

export function CategoryBadge({ category, href }: Props) {
  const label = LABELS[category.toLowerCase()] ?? category;
  const cls =
    'bg-teal text-white text-xs uppercase tracking-widest px-2 py-0.5 rounded-full font-medium';

  if (href) {
    return (
      <a href={href} className={cls} onClick={(e) => e.stopPropagation()}>
        {label}
      </a>
    );
  }
  return <span className={cls}>{label}</span>;
}
