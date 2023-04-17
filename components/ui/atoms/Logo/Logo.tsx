import { useRouter } from 'next/router';
import { KitblockLogoSvg } from '@/components/svg';
import styles from './Logo.module.scss';

const Logo = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper} onClick={() => router.replace('/')}>
      <KitblockLogoSvg width="100%" height="100%" />
    </div>
  );
};

export default Logo;
