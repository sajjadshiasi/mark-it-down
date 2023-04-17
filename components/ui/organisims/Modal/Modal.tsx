import { Button, Close } from '../../atoms';
import { Overlay } from '../../organisims';
import { IModalProps } from './Interface';
import styles from './Modal.module.scss';

const Modal = (porps: IModalProps) => {
  const { children, onClose } = porps;
  return (
    <Overlay>
      <div className={styles.wrapper}>
        <Button variant="text" onClick={onClose} className={styles.closeBtn}>
          <Close className={styles.closeIcon} />
        </Button>
        <div className={styles.inner}>{children}</div>
      </div>
    </Overlay>
  );
};
export default Modal;
