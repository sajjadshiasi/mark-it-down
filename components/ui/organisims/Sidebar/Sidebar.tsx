import { useRef } from 'react';
import { animated, easings, useSpring } from '@react-spring/web';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { BuilderSvg, ProfileIconSvg } from '@/components/svg';
import { useCloseOutsideClick, useProfileData } from '@/hooks';
import { useStore } from '@/store';
import { Button, Icon, Text } from '../../atoms';
import { Card } from '../../molecules';
import { Menu } from '../Menu';
import { ISidebarProps } from './Interface';
import styles from './Sidebar.module.scss';

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;
  const { isOpenProfileCard, setIsOpenProfileCard } = useStore();
  const profileRef = useRef(null);
  const { profile } = useProfileData();
  const router = useRouter();
  useCloseOutsideClick(profileRef, () => {
    setIsOpenProfileCard(false);
  });
  const openCardStyle = useSpring({
    to: isOpenProfileCard
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
        },
    config: {
      duration: 1500,
      easing: easings.easeOutCubic,
    },
    reverse: true,
  });
  const rootClassName = cn(styles.wrapper, className);
  return (
    <div className={rootClassName}>
      <div className={styles.topSection}>
        <Menu />
      </div>
      <div className={styles.bottomSection}>
        <Button
          onClick={() => {
            router.push('/kits');
          }}
          variant="text"
          className=""
        >
          <Icon className={styles.icon}>
            <BuilderSvg width="100%" height="100%" />
          </Icon>
          <Text className={styles.title}>menu.builder</Text>
        </Button>
        <div ref={profileRef}>
          <Button
            onClick={() => setIsOpenProfileCard(!isOpenProfileCard)}
            variant="text"
            className=""
          >
            <Icon className={styles.icon}>
              <ProfileIconSvg width="100%" height="100%" />
            </Icon>
            <Text className={styles.title}>menu.profile</Text>
          </Button>
          {isOpenProfileCard && (
            <animated.div
              style={openCardStyle}
              className={styles.profileCardContainer}
            >
              <div className={styles.triangleArrow} />
              <Card
                bgColor="default"
                variant="profile"
                data={profile}
                className={styles.profileCard}
              />
            </animated.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
