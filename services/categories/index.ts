/* eslint-disable @typescript-eslint/naming-convention */
import { Category as api } from '@/api';
import { IAllCategoriesBuildings, IGetAllCategory } from '@/types';

const Categories = () => {
  const _getAllCategory = (props: IGetAllCategory) =>
    new Promise<IAllCategoriesBuildings>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .getAllCategory(props)
          .then((res) => {
            resolve(res.data as IAllCategoriesBuildings);
          })
          .catch((err: any) => reject(err));
      }
    );
  return { _getAllCategory };
};

export default Categories;
