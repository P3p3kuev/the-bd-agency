interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses =
    'font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 rounded',
    secondary:
      'border-2 border-navy-900 text-navy-900 bg-white hover:bg-navy-50 active:bg-navy-100 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 rounded',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
