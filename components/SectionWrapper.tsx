interface SectionWrapperProps {
  id?: string;
  variant?: 'white' | 'gray' | 'navy';
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  variant = 'white',
  children,
  className = '',
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    navy: 'bg-navy-900',
  };

  const textClasses = {
    white: 'text-gray-900',
    gray: 'text-gray-900',
    navy: 'text-white',
  };

  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 ${backgroundClasses[variant]} border-b border-gray-200 ${textClasses[variant]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
