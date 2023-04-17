import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '@/store';
import { Icon, Text } from '../../atoms';
import { IMenuItemProps } from './Interface';
import styles from './MenuItem.module.scss';

const MenuItem = (props: IMenuItemProps) => {
  const { title, Svg, className, href } = props;
  const { setIsOpenMobileMenu } = useStore();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(
      router.pathname == href
        ? true
        : router.pathname.split('/')[1] == href
        ? true
        : false
    );
  }, [href, router, router.pathname]);

  const rootClassName = cn(
    styles.wrapper,
    {
      [styles.active]: isActive,
    },
    className
  );

  const onClickHandler = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <li>
      <Link className={rootClassName} href={href} onClick={onClickHandler}>
        <Icon className={styles.menuItemIcon}>{Svg}</Icon>
        <Text className={styles.menuItemText}>{title}</Text>
      </Link>
    </li>
  );
};

export default MenuItem;
