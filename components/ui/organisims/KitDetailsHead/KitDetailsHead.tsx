import Image from 'next/image';
import { HappyFaceSvg, UpsetFace } from '@/components/svg/kitDetails';
import { Button, Text } from '../../atoms';
import { IKitDetailsHeadProps } from './Interface';
import styles from './KitDetailsHead.module.scss';

const KitDetailsHead = (props: IKitDetailsHeadProps) => {
  const { images, name, dislike, likes } = props.data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image src={images[0]} alt="kit" fill />
        </div>
        <div className={styles.info}>
          <div className={styles.textInner}>
            <Text size={48} fontWeight="font-bold">
              {name}
            </Text>
            <div className="flex flex-row">
              {/* TODO change username */}
              <Text className="mr-6" size={28}>
                By Landrocker
              </Text>
              <Button variant="text">
                <Text className="inline-block text-purple" size={28}>
                  {name}
                </Text>
              </Button>
            </div>
            <div className={styles.likeAndDislike}>
              <div className={styles.like}>
                <HappyFaceSvg width="100%" height="100%" />{' '}
                <Text size={24}>{likes}</Text>
              </div>
              <div className={styles.dislike}>
                <UpsetFace width="100%" height="100%" />{' '}
                <Text size={24}>{dislike}</Text>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <Button variant="purple" className="w-full mt-18 h-[42px]">
              <Text size={32} fontWeight="font-bold">
                Start Building
              </Text>
            </Button>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full h-full">
        <Button variant="purple" className="w-full mt-18 h-[42px]">
          <Text size={32} fontWeight="font-bold">
            Start Building
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default KitDetailsHead;
