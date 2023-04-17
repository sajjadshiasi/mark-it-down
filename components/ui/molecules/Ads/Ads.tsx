import cn from 'classnames';
import Image from 'next/image';
import styles from './Ads.module.scss';
import { IAdsProps } from './Interface';

const Ads = (props: IAdsProps) => {
  const { className } = props;

  const rootClassName = cn(styles.wrapper, className);

  return <div className={rootClassName}></div>;
};

export default Ads;
