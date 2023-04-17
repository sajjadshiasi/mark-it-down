import { Header, Sidebar } from '@/components/ui/organisims';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { Auth } from '../Auth';
import { MobileMenu } from '../MobileMenu';
import { ILayoutProps } from './Interface';
import styles from './Layout.module.scss';

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  const { isOpenMobileMenu, authModal } = useStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.fakeHeader}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.fakeSidebar}>
          <Sidebar />
        </div>
        <div className={styles.container}>
          <div className={styles.box}>{children}</div>
        </div>
      </div>
      {isOpenMobileMenu && <MobileMenu />}
      {authModal !== EAuth.null && <Auth />}
    </div>
  );
};

export default Layout;
