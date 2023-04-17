import Image from 'next/image';
import Link from 'next/link';
import { KitcardTopFrameSvg, PersonSvg, SmileSvg } from '@/components/svg';
import { KitCardStat } from '..';
import { Icon, Text } from '../../atoms';
import { IKitCardItemProps } from './Interface';
import styles from './KitCard.module.scss';

const KitCard = (props: IKitCardItemProps) => {
  const { item, type } = props;

  return (
    <div className={styles.wrapper}>
      <Link href={type === 'buildings' ? '#' : `/${type}/${item.id}`}>
        <Icon className={styles.topFrameCurve}>
          <KitcardTopFrameSvg width="100%" height="100%" />
        </Icon>
        <div className={styles.boxImage}>
          <div className={styles.imageItem}>
            <Image src={item.images[0]} alt={item.name} fill />
          </div>
        </div>
        <div className={styles.boxData}>
          <div>
            <Text size={20} fontWeight="font-bold" className={styles.title}>
              {item.name}
            </Text>
          </div>
          <div className={styles.boxStat}>
            <KitCardStat
              text={item.visitors}
              icon={<PersonSvg width={'100%'} height="100%" />}
            />
            <KitCardStat
              text={
                item.likes == 0
                  ? '0%'
                  : `${(item.likes / (item.likes + item.dislike)) * 100}%`
              }
              icon={<SmileSvg width={'100%'} height="100%" />}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default KitCard;
