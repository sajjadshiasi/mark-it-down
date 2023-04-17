import { IOverlayProps } from './Interface';
import styles from './Overlay.module.scss';

const Overlay = (props: IOverlayProps) => {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
};

export default Overlay;
