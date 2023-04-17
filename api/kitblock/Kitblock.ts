/* eslint-disable import/no-anonymous-default-export */

import {
  IAllKitblocksProps,
  IAllKitblocksWithData,
  IAllKitblocksWithDataError,
  IKitDetails,
  IKitDetailsLatestBuildings,
  IKitDetailsLatestBuildingsProps,
  IKitDetailsProps,
} from '@/types';
import { defaultAxiosInstance } from '../httpServices';

export default {
  getAllKitblocks: (props?: IAllKitblocksProps) => {
    if (props !== undefined) {
      return defaultAxiosInstance.get<IAllKitblocksWithData>('kit-block', {
        headers: {
          Authorization: props.Authorization,
        },
        params: props.params,
      });
    } else {
      return defaultAxiosInstance.get<IAllKitblocksWithData>('kit-block');
    }
  },

  getKitblockDetails: (props: IKitDetailsProps) =>
    new Promise<IKitDetails>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        defaultAxiosInstance
          .get<IKitDetails>(`kit-block/${props.id}`)
          .then((res) => {
            let mappedData = {};
            const { data } = res.data;
            const {
              name,
              created_at: createdAt,
              dislike,
              disliked,
              images,
              id,
              liked,
              likes,
              pieces,
              updated_at: updatedAt,
              style,
              visitors,
            } = data;
            mappedData = {
              main: {
                name,
                disliked,
                dislike,
                liked,
                likes,
                images,
                id,
              },
              //TODO change description to its respective
              description: 'This is test description',
              assets: [
                {
                  label: 'Pieces',
                  value: pieces,
                },
                {
                  label: 'Style',
                  value: style,
                },
                {
                  label: 'Visits',
                  value: visitors,
                },
                {
                  label: 'Created',
                  value: createdAt,
                },
                //TODO change updated add updated add
                {
                  label: 'Updated',
                  value: 16781654534,
                },
              ],
            };
            resolve(mappedData);
          })
          .catch((err: IAllKitblocksWithDataError) => reject(err));
      }
    ),
  getLatestBuildings: (props: IKitDetailsLatestBuildingsProps) =>
    defaultAxiosInstance.get<IKitDetailsLatestBuildings>(
      `kit-block/${props.id}/buildings`
    ),
};
