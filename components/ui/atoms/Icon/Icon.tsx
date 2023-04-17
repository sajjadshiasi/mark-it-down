import { ReactNode } from 'react';
import styles from './Icon.module.scss';

interface IIconProps {
  children: ReactNode;
  className?: string;
}

const Icon = (props: IIconProps) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export default Icon;
