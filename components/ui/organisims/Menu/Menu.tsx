import cn from 'classnames';
import { MenuItems } from '@/constants';
import { MenuItem } from '../../molecules';
import { IMenuProps } from './Interface';
import styles from './Menu.module.scss';

const Menu = (props: IMenuProps) => {
  const { className } = props;
  const { menuItems } = MenuItems();

  const rootClassName = cn(styles.wrapper, className);

  return (
    <ul className={rootClassName}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          Svg={item.svg}
          href={item.href}
        />
      ))}
    </ul>
  );
};

export default Menu;
