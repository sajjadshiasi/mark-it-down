import cn from 'classnames';
import Image from 'next/image';
import styles from './Avatar.module.scss';
import { IAvatarProps } from './Interface';

const Avatar = (props: IAvatarProps) => {
  const { className, src } = props;
  const rootClassName = cn(styles.wrapper, className);
  return (
    <>
      {typeof src === 'string' ? (
        <div className={rootClassName}>
          <Image src="src" alt="avatar" width={160} height={160} />
        </div>
      ) : (
        <div className={rootClassName}>{src}</div>
      )}
    </>
  );
};

export default Avatar;
