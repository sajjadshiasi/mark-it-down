/* eslint-disable import/no-anonymous-default-export */
import {
  IAllCategoriesBuildings,
  IGetAllCategory,
  ISingleCategoryBuildings,
} from '@/types';
import { defaultAxiosInstance } from '../httpServices';

export default {
  getAllCategory: (props: IGetAllCategory) => {
    if (props.id === undefined) {
      return defaultAxiosInstance.get<IAllCategoriesBuildings>(
        'category/buildings',
        {
          params: props,
        }
      );
    } else {
      return defaultAxiosInstance.get<ISingleCategoryBuildings>(
        `category/${props.id}/buildings`,
        { params: props }
      );
    }
  },
};
