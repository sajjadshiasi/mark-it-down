import { KitDetailsAsset } from '../../molecules/KitDetailsAsset';
import { IKitDetailsAssetsWrapperProps } from './Interface';
import styles from './KitDetailsAssetsWrapper.module.scss';

const KitDetailsAssetsWrapper = (props: IKitDetailsAssetsWrapperProps) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      {data.map((item: any, index: number) => (
        <KitDetailsAsset key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default KitDetailsAssetsWrapper;
