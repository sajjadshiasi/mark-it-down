export interface ISliderItemsProps {
  image: string;
  title: string;
  subTitle: string;
  btnText: string;
  haveSvg: boolean;
}
export interface ISliderProps {
  items: ISliderItemsProps[];
}
