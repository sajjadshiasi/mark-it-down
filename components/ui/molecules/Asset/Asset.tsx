import { ReactNode } from 'react';
import cn from 'classnames';
import { Icon, Text } from '../../atoms';
import styles from './Asset.module.scss';

interface IAssetProps {
  Svg: ReactNode;
  count: number;
  className: string;
}

const Assets = (props: IAssetProps) => {
  const { Svg, count, className } = props;

  const rootClassName = cn(styles.wrapper, className);
  return (
    <div className={rootClassName}>
      <Icon className={styles.assetIcon}>{Svg}</Icon>
      <Text className={styles.assetCount} size={20}>
        {count}
      </Text>
    </div>
  );
};

export default Assets;
