import {
  IAllKitblockData,
  ICategoryBuilding,
  IRelatedBuildings,
} from '@/types';

export interface IKitCardsWrapperProps {
  title?: string;
  data: Array<ICategoryBuilding | IRelatedBuildings | IAllKitblockData>;
  id?: string;
  isWrap: boolean;
  type: 'kits' | 'buildings';
  className?: string;
}
