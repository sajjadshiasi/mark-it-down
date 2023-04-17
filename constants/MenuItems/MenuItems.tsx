import {
  AvatarSvg,
  HomeSvg,
  InventorySvg,
  MarketSvg,
  MessagesSvg,
} from '@/components/svg';

const MenuItems = () => {
  const menuItems = [
    {
      title: 'menu.home',
      svg: <HomeSvg width="100%" height="100%" />,
      href: '/',
    },
    {
      title: 'menu.inventory',
      svg: <InventorySvg width="100%" height="100%" />,
      href: '/inventory',
    },
    {
      title: 'menu.avatar',
      svg: <AvatarSvg width="100%" height="100%" />,
      href: '/avatar',
    },
    {
      title: 'menu.market',
      svg: <MarketSvg width="100%" height="100%" />,
      href: '/market',
    },
    {
      title: 'menu.messages',
      svg: <MessagesSvg width="100%" height="100%" />,
      href: '/messages',
    },
  ];
  return { menuItems };
};

export default MenuItems;
