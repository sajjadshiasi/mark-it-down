import { ISingleCategoryWithData } from '@/types';
import { ICardDataProps } from '../../molecules/Card/Interface';

export interface IHomeProps {
  data: Array<ISingleCategoryWithData>;
  slider: any;
  cards: {
    homeCardEvent: ICardDataProps;
    homeCardBuilder: ICardDataProps;
  };
}
