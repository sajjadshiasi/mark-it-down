import { useEffect, useRef, useState } from 'react';
import { easings, useSpring, useTransition } from '@react-spring/web';
import { TTabProps } from './Interface';

const TabsAnimation = (props: TTabProps) => {
  const { tabs, selectedTabIndex, setSelectedTab } = props;
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();
  const onLeaveTabs = () => {
    setHoveredTabIndex(null);
  };
  const onEnterTab = (i: number) => {
    setHoveredTabIndex(i);
  };
  const onSelectTab = (i: number) => {
    setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
  };
  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();
  const stylesChangingOnUpdate =
    hoveredRect && navRect
      ? {
          transform: `translate3d(${hoveredRect.left - navRect.left}px,${
            hoveredRect.top - navRect.top
          }px,0px)`,
          width: hoveredRect.width,
          height: hoveredRect.height,
        }
      : {};
  const bgTransition = useTransition(hoveredTabIndex != null, {
    from: () => ({
      ...stylesChangingOnUpdate,
      opacity: 0,
    }),
    enter: {
      ...stylesChangingOnUpdate,
      opacity: 1,
    },
    update: stylesChangingOnUpdate,
    leave: { opacity: 0 },
    config: {
      duration: 150,
      easing: easings.easeOutCubic,
    },
  });
  const underlineStyles = useSpring({
    to:
      selectedRect && navRect
        ? {
            width: selectedRect.width * 1.8,
            transform: `translateX(calc(${
              selectedRect.left - navRect.left
            }px + 10%))`,
            opacity: 1,
            borderRadius: '8px',
          }
        : {
            opacity: 0,
          },
    config: {
      duration: 150,
      easing: easings.easeOutCubic,
    },
  });
  return {
    navRef,
    stylesChangingOnUpdate,
    buttonRefs,
    onLeaveTabs,
    onEnterTab,
    onSelectTab,
    bgTransition,
    underlineStyles,
    hoveredTabIndex,
  };
};
export default TabsAnimation;
