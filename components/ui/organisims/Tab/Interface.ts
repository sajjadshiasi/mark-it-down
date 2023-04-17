import { Tab } from '@/hooks/useTabs';

export type TTabProps = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};
export type TContentProps = {
  selectedTabIndex: number;
  direction: number;
  tabs: Tab[];
  className?: any;
};
