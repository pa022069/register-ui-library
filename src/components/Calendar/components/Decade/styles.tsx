import { RADIUS, PADDING, FONTSIZE, GAP } from '../../base/design-tokens';
import { cn } from '@utils/classNames';

interface StyledYearProps {
  isCurrentYear: boolean;
  isCurrentDecade: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className={cn('grid grid-cols-4', GAP['BASE'])}>{children}</div>;
}

export function Year({ isCurrentYear, isCurrentDecade, children, onClick }: StyledYearProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'aspect-square',
        'cursor-pointer',
        'flex items-center justify-center',
        'border-none outline-none',
        'bg-transparent',
        !isCurrentDecade ? 'text-black' : 'text-gray-400',
        'hover:bg-[#3b82f6] hover:text-white',
        isCurrentYear && 'bg-[#3b82f6] text-white',
        FONTSIZE['BASE'],
        RADIUS['HALF'],
        PADDING['SM'],
      )}
    >
      {children}
    </button>
  );
}
