interface Props {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const spacingMap = {
  none: '',
  sm: 'my-2',
  md: 'my-4',
  lg: 'my-8',
};

export function Divider({ spacing = 'md', className = '' }: Props) {
  return (
    <hr
      className={`border-0 border-t-2 border-teal ${spacingMap[spacing]} ${className}`}
    />
  );
}
