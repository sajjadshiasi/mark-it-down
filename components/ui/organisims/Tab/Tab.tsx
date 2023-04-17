/* eslint-disable @typescript-eslint/no-shadow */
import { animated } from '@react-spring/web';
import classNames from 'classnames';
import { Text } from '../../atoms';
import Content from './Content';
import { TTabProps } from './Interface';
import styles from './Tab.module.scss';
import TabsAnimation from './TabsAnimation';

const Tabs = (props: TTabProps): JSX.Element => {
  const { tabs, selectedTabIndex } = props;
  const {
    navRef,
    buttonRefs,
    onLeaveTabs,
    onEnterTab,
    bgTransition,
    onSelectTab,
    underlineStyles,
    hoveredTabIndex,
  } = TabsAnimation(props);

  return (
    <nav
      ref={navRef}
      className={styles.navRefWrapper}
      onPointerLeave={onLeaveTabs}
    >
      <div className={styles.btnWrapper}>
        {tabs.map((item, i) => (
          <button
            key={i}
            className={classNames(styles.navBtn, {})}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => onEnterTab(i)}
            onFocus={() => onEnterTab(i)}
            onClick={() => onSelectTab(i)}
          >
            <Text
              size={32}
              fontWeight="font-bold"
              className="ml-[3rem] w-[150px]"
            >
              {item.label}
            </Text>
          </button>
        ))}
      </div>
      {bgTransition((styles: any) => (
        <animated.div className={styles.transitionsWrapper} style={styles} />
      ))}
      <animated.div
        // className={styles.transitionsInner}
        className="absolute bottom-[17px] left-0 z-10 h-0.5 bg-slate-500 border-purple border-b-8"
        style={underlineStyles}
      />{' '}
    </nav>
  );
};

export const Tab = { Tabs, Content };
//'border-b-3 border-blue': hoveredTabIndex === i || selectedTabIndex === i,
