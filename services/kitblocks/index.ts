/* eslint-disable @typescript-eslint/naming-convention */
import { Kitblock as api } from '@/api';
import {
  IAllKitblocksProps,
  IAllKitblocksWithData,
  IAllKitblocksWithDataError,
  IKitDetails,
  IKitDetailsLatestBuildings,
  IKitDetailsLatestBuildingsError,
  IKitDetailsLatestBuildingsProps,
  IKitDetailsProps,
} from '@/types';

const Kitblock = () => {
  const _getAllKitblocks = (props?: IAllKitblocksProps) =>
    new Promise<IAllKitblocksWithData>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .getAllKitblocks(props)
          .then((res) => {
            resolve(res.data as IAllKitblocksWithData);
          })
          .catch((err: IAllKitblocksWithDataError) => reject(err));
      }
    );

  // const _getKitblockDetails = (props: IKitDetailsProps) =>
  //   new Promise<IKitDetails>(
  //     (resolve: (res: any) => void, reject: (err: any) => void) => {
  //       api
  //         .getKitblockDetails(props)
  //         .then((res) => {
  //           resolve(res.data as IKitDetails);
  //         })
  //         .catch((err: IAllKitblocksWithDataError) => reject(err));
  //     }
  //   );

  const _getLatestBuildings = (props: IKitDetailsLatestBuildingsProps) =>
    new Promise<IKitDetailsLatestBuildings>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .getLatestBuildings(props)
          .then((res) => {
            resolve(res.data as IKitDetailsLatestBuildings);
          })
          .catch((err: IKitDetailsLatestBuildingsError) => reject(err));
      }
    );

  return { _getAllKitblocks, _getLatestBuildings };
};

export default Kitblock;
