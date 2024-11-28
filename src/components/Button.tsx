import { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-lg transition-colors',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}