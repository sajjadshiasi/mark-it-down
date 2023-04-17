import { FC } from 'react';
import { Icon, Text } from '../../atoms';
import { IKitCardStats } from './Interface';
import styles from './KitCardStat.module.scss';

const KitCardStat: FC<IKitCardStats> = (props) => {
  const { icon, text } = props;
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.statsIcon}>{icon}</Icon>
      <Text size={16} className="text-[#585A61]">
        {text}
      </Text>
    </div>
  );
};

export default KitCardStat;
