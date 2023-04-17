import { IKitDetailsData, IRelatedBuildings } from '@/types/DTO';

export interface IKitDetailsProps {
  kitDetails: IHeadData;
  latestData: ILatestData;
}

export type IHeadData = {
  main: IMainProps;
  description: string;
  assets: Array<IAssetsProps>;
};

export type IMainProps = Omit<
  IKitDetailsData,
  | 'config'
  | 'description'
  | 'file'
  | 'pieces'
  | 'style'
  | 'created_at'
  | 'updated_at'
  | 'visitors'
>;

export type IAssetsProps = Omit<
  IKitDetailsData,
  | 'config'
  | 'description'
  | 'file'
  | 'pieces'
  | 'style'
  | 'created_at'
  | 'updated_at'
>;

export interface ILatestData {
  data: Array<IRelatedBuildings>;
  title: string;
  id?: string;
}
