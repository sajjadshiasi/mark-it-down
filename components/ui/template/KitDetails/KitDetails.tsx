import { useState } from 'react';
import { useTabs } from '@/hooks/useTabs';
import { Text } from '../../atoms';
import { KitDetailsAsset } from '../../molecules/KitDetailsAsset';
import {
  KitCardsWrapper,
  KitDetailsAssetsWrapper,
  KitDetailsHead,
} from '../../organisims';
import { Tab } from '../../organisims/Tab/Tab';
import { IKitDetailsProps } from './Interface';
import styles from './KitDetails.module.scss';

const KitDetails = (props: IKitDetailsProps) => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'About',
        children: (
          <>
            <div className="mb-[5rem]">
              <Text size={32} fontWeight="font-bold">
                Information
              </Text>
              <KitDetailsAssetsWrapper data={props.kitDetails.assets} />
            </div>
            <Text size={32} fontWeight="font-bold">
              Creator Description
            </Text>
            <Text size={24}>
              [NEW!] Welcome To Wednesday [Story] A Group Of 2-12 Friends Are
              Sent To Nevermore Academy Where Strange Things Start To Happen.
              It’s Up To You And Wednesday To Investigate And Save The Day!
            </Text>
            <Text size={24}>
              🎁 Join The Mousetrap Studios Group For Free In-Game Rewards! 🎁
            </Text>

            <Text size={24}>
              🔊 Play With The Sound Up For The Best Experience! 🔊
            </Text>
            <Text size={24}>
              ✨ Can You Get All TWO Endings? Play Again To Win Both Badges!✨
            </Text>
            <Text size={24}>
              👍 Be Sure To Like And Favorite This Game If You Enjoyed It! ⭐
            </Text>
            <Text size={24}>
              💀 WARNING: This Game Has Scary Scenes And Flashing Lights. 💀
              <br /> 🛒 Struggling To Survive? Check Out The Store For Some
              Helpful Perks To Help You Survive! 🛒
            </Text>
          </>
        ),
        id: 'About',
      },
    ],
    initialTabId: 'About',
  });
  const tabs = useTabs(hookProps);

  // TODO change static data to dynamic

  return (
    <div className={styles.wrapper}>
      <KitDetailsHead data={props.kitDetails.main} />
      <div className={styles.tabs}>
        <Tab.Tabs {...tabs.tabProps} />
        <Tab.Content {...tabs.contentProps} />
      </div>
      <KitCardsWrapper
        isWrap={false}
        title={props.latestData.title}
        data={props.latestData.data}
        type="buildings"
        className={styles.latest}
      />
    </div>
  );
};
export default KitDetails;
