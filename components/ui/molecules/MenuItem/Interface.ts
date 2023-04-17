import { ReactNode } from 'react';

export interface IMenuItemProps {
  Svg?: ReactNode;
  title: string;
  className?: string;
  href: string;
}
