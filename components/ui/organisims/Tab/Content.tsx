import { animated, easings, useTransition } from '@react-spring/web';
import { TContentProps } from './Interface';

const Content = (props: TContentProps) => {
  const { className, direction, selectedTabIndex, tabs } = props;
  const transitions = useTransition(selectedTabIndex, {
    exitBeforeEnter: false,
    keys: null,
    from: {
      opacity: 0,
      transform: `translate3d(${
        direction > 0 ? '100' : '-100'
      }px,0,0) scale(0.8)`,
    },
    enter: { opacity: 1, transform: 'translate3d(0px,0,0) scale(1)' },
    leave: {
      opacity: 0,
      transform: `translate3d(${
        direction > 0 ? '-100' : '100'
      }px,0,0) scale(0.8)`,
      position: 'absolute',
    },
    config: {
      duration: 250,
      easing: easings.easeOutCubic,
    },
  });
  return transitions((styles, item) => (
    <animated.div key={selectedTabIndex} style={styles} className={className}>
      {tabs[item].children}
    </animated.div>
  ));
};
export default Content;
