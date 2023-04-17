import { useRef } from 'react';
import cn from 'classnames';
import {
  ExitSvg,
  GemSvg,
  MenuMobileSvg,
  ProfileIconSvg,
  ProfileSvg,
  SearchSvg,
} from '@/components/svg';
import { useStore } from '@/store';
import { Button, Icon, Input, Text } from '../../atoms';
import { Logo } from '../../atoms/Logo';
import { Asset } from '../../molecules';
import styles from './Header.module.scss';
import { IHeaderProps } from './Interface';

// interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const { className } = props;
  const { setIsOpenMobileMenu, setIsOpenProfileCard, isOpenProfileCard } =
    useStore();
  const rootClassName = cn(styles.wrapper, className);
  const profileRef = useRef(null);

  // useCloseOutsideClick(profileRef, () => {
  //   setIsOpenProfileCard(false);
  // });

  //TODO fix on close profile btn and auth condition

  // const {} = props;
  return (
    <div className={rootClassName}>
      <div className={styles.logo}>
        <div
          className={styles.mobileMenu}
          onClick={() => setIsOpenMobileMenu(true)}
        >
          <Icon className={styles.mobileMenuIcon}>
            <MenuMobileSvg height="100%" width="100%" />
          </Icon>
        </div>
        <Logo />
      </div>
      <div className={styles.profileAssets}>
        <Icon className={styles.headerMobileSearch}>
          <SearchSvg height="100%" width="100%" />
        </Icon>
        {/* <Input
          type=""
          Svg={<SearchSvg />}
          placeholder="Search"
          className={styles.headerDesktopSearch}
        /> */}
        <Asset
          Svg={<GemSvg height="100%" width="100%" />}
          count={156}
          className={styles.headerAssets}
        />

        <div ref={profileRef}>
          <Button
            onClick={() => setIsOpenProfileCard(!isOpenProfileCard)}
            variant="text"
            className=""
          >
            <Icon className={styles.headerMobileProfile}>
              <ProfileIconSvg height="100%" width="100%" />
            </Icon>
          </Button>
        </div>

        {isOpenProfileCard && (
          <div className={styles.profileCardContainer}>
            <div className={styles.triangleArrow} />
            <ul className={styles.profileCard}>
              <li>
                <Icon className={styles.profileIcon}>
                  <ProfileSvg width="100%" height="100%" />
                </Icon>
                <Text size={16}>Profile</Text>
              </li>
              <li>
                <Icon className={styles.exitIcon}>
                  <ExitSvg width="100%" height="100%" />
                </Icon>
                <Text size={16}>Logout</Text>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
