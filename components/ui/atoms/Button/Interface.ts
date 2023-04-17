export interface IButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  onClick?: () => void;
  variant?: 'text' | 'action' | 'outline' | 'gradient' | 'purple' | 'event';
  hasHover?: boolean;
  rounded?: 12 | 14;
}
