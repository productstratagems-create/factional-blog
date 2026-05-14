import { useId } from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { text: 'text-base', iconH: 'h-7' },
  md: { text: 'text-xl', iconH: 'h-9' },
  lg: { text: 'text-4xl', iconH: 'h-14' },
};

export function Logo({ size = 'md', className = '' }: Props) {
  const uid = useId();
  const markerId = `arrow-${uid}`;
  const { text, iconH } = sizeMap[size];

  return (
    <div
      className={`flex flex-row items-center gap-1.5 font-display tracking-[0.12em] uppercase text-heading ${text} ${className}`}
    >
      <span>NORSK</span>
      <svg
        viewBox="0 0 50 56"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconH} w-auto flex-shrink-0`}
        aria-hidden="true"
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#1B3A7A" />
          </marker>
        </defs>
        <path
          d="M 2,46 Q 8,28 20,10"
          stroke="#1B3A7A"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
        <path
          d="M 14,46 Q 20,28 32,10"
          stroke="#1B3A7A"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
        <path
          d="M 24,46 Q 30,30 42,14"
          stroke="#1B3A7A"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      </svg>
      <span>LUFTVERN</span>
    </div>
  );
}
