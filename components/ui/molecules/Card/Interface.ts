export interface ICardProps {
  className?: string;
  variant: 'profile' | 'builder' | 'event' | 'mobileProfile';
  bgColor: 'default' | 'transparent';
  data: ICardDataProps;
}

export interface ICardDataProps {
  h2Text: string;
  h3Text: string;
  btnTextOne: string;
  btnTextTwo?: string;
  onClickBtnOne: (e?: any) => void;
  onClickBtnTwo?: (e?: any) => void;
  imageSrc: string;
}
