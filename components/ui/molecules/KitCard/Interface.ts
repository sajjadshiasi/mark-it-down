import {
  IAllKitblockData,
  ICategoryBuilding,
  IRelatedBuildings,
} from '@/types';

export interface IKitCardItemProps {
  item: ICategoryBuilding | IRelatedBuildings | IAllKitblockData;
  type: 'kits' | 'buildings';
}
