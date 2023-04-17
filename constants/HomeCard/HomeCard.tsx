import { ICardDataProps } from '@/components/ui/molecules/Card/Interface';

const HomeCard = () => {
  const homeCardEvent: ICardDataProps = {
    h2Text: 'Win Prizes!',
    h3Text: 'Create a space &',
    imageSrc: '/images/event.png',
    btnTextOne: 'Lets Go...',
    onClickBtnOne: () => {},
  };
  const homeCardBuilder: ICardDataProps = {
    h2Text: 'Start Building',
    h3Text: 'Select a KitBlock and create your space.',
    imageSrc: '/images/2.png',
    btnTextOne: 'KitBlock Builder',
    onClickBtnOne: () => {},
  };
  return { homeCardEvent, homeCardBuilder };
};

export default HomeCard;
