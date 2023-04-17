import { useEffect, useState } from 'react';
import cn from 'classnames';
import {
  CreatedSvg,
  PiecesSvg,
  StylesSvg,
  UpdatedSvg,
  VisitorSvg,
} from '@/components/svg/kitDetails';
import { useMoment } from '@/hooks';
import { Icon, Text } from '../../atoms';
import { IKitDetailsAssetProp } from './Interface';
import styles from './KitDetailsAsset.module.scss';

const KitDetailsAsset = (props: IKitDetailsAssetProp) => {
  const { label, value, className } = props;
  const rootClassName = cn(styles.wrapper, className);
  const { timestampToDate } = useMoment();

  const [time, setTime] = useState('');

  useEffect(() => {
    if (label === 'Created' || label === 'Updated') {
      setTime(timestampToDate(value as number));
    }
  }, [value]);

  const iconHandler = () => {
    switch (label) {
      case 'Pieces':
        return (
          <Icon className={styles.icon}>
            <PiecesSvg width="100%" height="100%" />
          </Icon>
        );
      case 'Style':
        return (
          <Icon className={cn(styles.icon, 'h-[30.26px] w-[22.63px]')}>
            <StylesSvg width="100%" height="100%" />
          </Icon>
        );
      case 'Visits':
        return (
          <Icon className={styles.icon}>
            <VisitorSvg width="100%" height="100%" />
          </Icon>
        );
      case 'Created':
        return (
          <Icon className={styles.icon}>
            <CreatedSvg width="100%" height="100%" />
          </Icon>
        );
      case 'Updated':
        return (
          <Icon className={styles.icon}>
            <UpdatedSvg width="100%" height="100%" />
          </Icon>
        );
    }
  };

  return (
    <div className={rootClassName}>
      {iconHandler()}
      <div className={styles.label}>
        <Text size={20}>{label}</Text>
      </div>
      <div className={styles.value}>
        <Text size={24} fontWeight="font-bold">
          {label === 'Created' || label === 'Updated' ? time : value}
        </Text>
      </div>
    </div>
  );
};

export default KitDetailsAsset;
