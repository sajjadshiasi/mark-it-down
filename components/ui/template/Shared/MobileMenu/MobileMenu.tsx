import { Button, Close } from '@/components/ui/atoms';
import { Card } from '@/components/ui/molecules';
import { Menu } from '@/components/ui/organisims';
import { useProfileData } from '@/hooks';
import { useStore } from '@/store';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { setIsOpenMobileMenu } = useStore();
  const { profile } = useProfileData();

  return (
    <div className={styles.wrapper}>
      <Button
        variant="text"
        onClick={() => setIsOpenMobileMenu(false)}
        className={styles.closeBtn}
      >
        <Close className={styles.closeIcon} />
      </Button>
      <div className={styles.container}>
        <Card
          bgColor="transparent"
          variant="mobileProfile"
          data={profile}
          className={styles.profile}
        />
        <Menu className={styles.menu} />
      </div>
    </div>
  );
};

export default MobileMenu;
